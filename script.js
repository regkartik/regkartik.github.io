const animatedElements = document.querySelectorAll(
  ".headline, .big-text"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.3 });

animatedElements.forEach(el => observer.observe(el));
