/* Animation for nav bar icons when clicked - may not keep */
/* $(".header__icons i").on("click", function() {
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
}); */

/* Animation for header arrow */
let tl = new TimelineMax({ repeat: -1, repeatDelay: 3 })

 tl.fromTo(
$(".mobile-arrow"),
    0.8,
    {
        ease:  SlowMo.ease.config(0.7, 0.4, false), 
        y: 0
        
    }, 
    {
        ease:  Power0.ease, 
        y: -25,
        rotation: 720 
    } 
)
    .to(
 $(".mobile-arrow"),
    1,
     {
        ease:  Elastic.easeOut.config(1.5, 0.3), 
        y: 0
     }
 )