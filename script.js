document.addEventListener("scroll", function () {
    const stats = document.querySelector("#stats");
    const counters = document.querySelectorAll(".count");
    let scrolledIntoView = stats.getBoundingClientRect().top < window.innerHeight;

    if (scrolledIntoView) {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let increment = target / 200;

            let updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }
});