// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Carousel Animation
let index = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide() {
    slides.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();