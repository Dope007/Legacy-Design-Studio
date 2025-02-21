document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Carousel Functionality
    let currentIndex = 0;
    function updateCarousel() {
        const images = document.querySelector('.carousel-images');
        currentIndex = (currentIndex + 1) % images.children.length;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(updateCarousel, 3000);

    // Light Glow Effect
    setTimeout(() => {
        const hero = document.getElementById('hero');
        hero.style.boxShadow = "0 0 20px gold";
        setTimeout(() => {
            hero.style.boxShadow = "none";
        }, 2000);
    }, 1000);
}); 