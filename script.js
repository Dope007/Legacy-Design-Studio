document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Number animation
    function animateNumber(id, target) {
        let num = 0;
        const interval = setInterval(() => {
            document.getElementById(id).textContent = num++;
            if (num > target) clearInterval(interval);
        }, 30);
    }

    setTimeout(() => {
        animateNumber("projects", 120);
        animateNumber("years", 10);
        animateNumber("clients", 250);
    }, 500);
});