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

/* Accessibility Scrolling credit to HEATHER MIGLIORISI https://css-tricks.com/smooth-scrolling-accessibility/ */
// URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

// filter handling for a /dir/ OR /indexordefault.page
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
            location.hash = target; 
            $target.focus();
            if ($target.is(":focus")){ //checking if the target was focused
              return false;
            }else{
              $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
              $target.focus(); //Setting focus
            };
          });       
        });
      }
    }
  }
});