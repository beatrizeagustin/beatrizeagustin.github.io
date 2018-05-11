$(".header__icons i").on("click", function() {
    TweenMax.fromTo(
    $(this),
    1,
    {
        ease: Elastic.easeOut.config(1, 0.3),
        y: -10
    },
    {
        ease: Elastic.easeOut.config(1, 0.3),
        y: 0
    }
)
});
