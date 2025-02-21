// Numbers animation
document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".num");
    numbers.forEach(num => {
        let start = 0;
        let end = parseInt(num.getAttribute("data-value"));
        let duration = 2000;
        let increment = end / (duration / 10);
        
        let counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            num.textContent = Math.floor(start);
        }, 10);
    });

    // Carousel logic
    let index = 0;
    const images = document.querySelector(".carousel-inner");
    setInterval(() => {
        index = (index + 1) % 3;
        images.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
});