document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;
    
    nextButton.addEventListener('click', function () {
        index = (index + 1) % track.children.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function () {
        index = (index - 1 + track.children.length) % track.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const width = track.children[0].clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }
});