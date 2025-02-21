// Number Animation
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        let count = 0;
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.innerText = count;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

// Carousel Scroll
const carousel = document.querySelector(".carousel");
carousel.addEventListener("wheel", (event) => {
    event.preventDefault();
    carousel.scrollBy({
        left: event.deltaY > 0 ? 300 : -300,
        behavior: "smooth",
    });
});