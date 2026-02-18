document.addEventListener("DOMContentLoaded", function () {

    /* ================= SCROLL ANIMATION ================= */

    const animatedElements = document.querySelectorAll(
        ".headline, .big-text"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach(el => observer.observe(el));


    /* ================= MOBILE NAV ================= */

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        navLinks.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
        if (
            navLinks.classList.contains("show") &&
            !navLinks.contains(e.target) &&
            !toggle.contains(e.target)
        ) {
            navLinks.classList.remove("show");
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

});
