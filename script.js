document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector("header").offsetHeight;

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    // Get Free Consultation Button Animation with Delay
    const consultationBtn = document.querySelector(".consultation-btn");
    
    consultationBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.getElementById("contact");

        consultationBtn.classList.add("glow-effect");

        setTimeout(() => {
            consultationBtn.classList.remove("glow-effect");
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }, 2000);
    });
});