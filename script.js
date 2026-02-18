document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Toggle menu when hamburger is clicked
    if (toggle && navLinks) {
        toggle.addEventListener("click", function (e) {
            e.stopPropagation(); // prevent event bubbling
            navLinks.classList.toggle("show");
        });

        // Close menu when clicking anywhere outside
        document.addEventListener("click", function (e) {
            if (
                navLinks.classList.contains("show") &&
                !navLinks.contains(e.target) &&
                !toggle.contains(e.target)
            ) {
                navLinks.classList.remove("show");
            }
        });

        // Optional: Close menu when clicking a link
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }

});
