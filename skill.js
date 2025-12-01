// Fade-in animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});

// Mobile menu functionality
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.add("open");
});

document.getElementById("close-menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.remove("open");
});
