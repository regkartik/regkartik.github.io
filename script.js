document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!toggle || !navLinks) return;

    // Toggle menu
    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        navLinks.classList.toggle("show");
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (
            navLinks.classList.contains("show") &&
            !navLinks.contains(e.target) &&
            !toggle.contains(e.target)
        ) {
            navLinks.classList.remove("show");
        }
    });

    // Close when ANY nav link is clicked (including # anchors)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

});
