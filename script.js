document.addEventListener("DOMContentLoaded", function () {

    // Scroll animations
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


    // Mobile menu toggle
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

});
