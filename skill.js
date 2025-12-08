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

function changeText() {
    const changingTextElement = document.getElementById("changingText");
    
    // Add fade-out effect before changing text
    changingTextElement.classList.add("fade-text");

    setTimeout(() => {
        // Change the text
        const baseText = "IT Student & ";
        changingTextElement.textContent = baseText + textArray[index];
        index = (index + 1) % textArray.length; // Loop back to the first item when we reach the end
        
        // Remove fade effect after text change and trigger fade-in
        changingTextElement.classList.remove("fade-text");
    }, 500); // Wait 0.5s before changing text to allow the fade-out effect
}
