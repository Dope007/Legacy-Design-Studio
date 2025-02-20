document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const options = { threshold: 0.6 };

    const animateCounter = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let target = +entry.target.getAttribute("data-target");
                let count = 0;
                let speed = 20;
                let updateCounter = () => {
                    if (count < target) {
                        count += Math.ceil(target / 100);
                        entry.target.innerText = count;
                        setTimeout(updateCounter, speed);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                updateCounter();
            }
        });
    };

    const observer = new IntersectionObserver(animateCounter, options);
    counters.forEach(counter => observer.observe(counter));
});