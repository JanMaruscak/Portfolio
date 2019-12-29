window.onscroll = function() {OnScroll()};
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });

  scroll(loop);
}

// loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function OnScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("navbar").className = "scrolled";
    document.getElementById("navbar").classList.add("scrolled");
    document.getElementById("navbarUl").classList.add("scrolled-ul");
  }
  else{
    // document.getElementById("navbar").className = "";    
    document.getElementById("navbar").classList.remove("scrolled");
    document.getElementById("navbarUl").classList.remove("scrolled-ul");
    // document.getElementById("navbarUl").className = "";
  }
}

function ToggleMobile(){
  document.getElementById('navbarUl').classList.toggle('open');
}






// $(document).ready(function () {
//   var $horizontal = $('.horizontal');
//   var startPosition = $horizontal.position().left;
//   var startTop = $horizontal.position().top;
//   var speed = 200;
//   $(window).scroll(function () {
//       var st = $(this).scrollTop();
//       var newPos = (st * (speed/100)) + startPosition;
//       var newTop = startTop - st / 2
//       $horizontal.css({
//           'left': newPos,
//           'top': newTop
//       });
//   });
// });