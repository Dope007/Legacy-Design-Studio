const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

next.addEventListener('click', () => {
    if (index < 2) {
        index++;
        track.style.transform = `translateX(-${index * 100}%)`;
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * 100}%)`;
    }
});