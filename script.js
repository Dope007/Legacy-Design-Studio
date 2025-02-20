// Ensure page reloads at top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Scroll-triggered animation for numbers
const counters = document.querySelectorAll('.counter');
let animationStarted = false;

window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (statsPosition < screenPosition && !animationStarted) {
        animationStarted = true;
        counters.forEach(counter => {
            let target = +counter.getAttribute('data-target');
            let count = 0;
            let speed = Math.ceil(target / 100);

            let updateCount = setInterval(() => {
                count += speed;
                if (count > target) {
                    counter.innerText = target;
                    clearInterval(updateCount);
                } else {
                    counter.innerText = count;
                }
            }, 20);
        });
    }
});