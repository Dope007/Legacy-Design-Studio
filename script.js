document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const statsSection = document.querySelector(".stats");
    
    let triggered = false;

    function runCounter() {
        if (!triggered) {
            counters.forEach(counter => {
                let count = 0;
                const updateCount = () => {
                    const target = +counter.getAttribute("data-count");
                    const increment = target / 50;

                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.floor(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            triggered = true;
        }
    }

    window.addEventListener("scroll", function () {
        if (statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
            runCounter();
        }
    });
}); 