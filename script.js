$(document).ready(function () {
    let counters = $(".counter");
    let started = false;

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let offsetTop = $(".stats").offset().top - 400;

        if (scrollTop > offsetTop && !started) {
            started = true;
            counters.each(function () {
                let $this = $(this);
                let countTo = $this.attr("data-count");

                $({ countNum: 0 }).animate(
                    { countNum: countTo },
                    {
                        duration: 2000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        },
                    }
                );
            });
        }
    });
});