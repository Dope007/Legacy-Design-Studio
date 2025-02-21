// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Glowing Effect on Click
document.querySelector('.consultation-btn').addEventListener('click', function() {
    this.style.boxShadow = "0 0 25px gold";
    setTimeout(() => {
        this.style.boxShadow = "";
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Number Animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.counter').forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let count = 0;
        let interval = setInterval(() => {
            count += Math.ceil(target / 50);
            counter.textContent = count;
            if (count >= target) clearInterval(interval);
        }, 30);
    });
});

// Carousel Functionality
let index = 0;
function moveSlide(step) {
    index += step;
    document.querySelector('.carousel-track').style.transform = `translateX(${-index * 100}%)`;
}