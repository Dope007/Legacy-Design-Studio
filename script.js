document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector("header").offsetHeight;
    const consultationBtn = document.querySelector(".consultation-btn");

    // Smooth scrolling for all nav links
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

    // Consultation button glow effect
    consultationBtn.addEventListener("click", function (e) {
        e.preventDefault();
        consultationBtn.classList.add("glow");

        setTimeout(() => {
            consultationBtn.classList.remove("glow");
            window.scrollTo({
                top: document.getElementById("contact").offsetTop - headerHeight, 
                behavior: "smooth"
            });
        }, 2000);
    });
});