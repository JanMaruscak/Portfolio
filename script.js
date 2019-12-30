window.onscroll = function() {
  OnScroll();
};
var scroll =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });

  scroll(loop);
}

// loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

function OnScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("navbar").className = "scrolled";
    document.getElementById("navbar").classList.add("scrolled");
    document.getElementById("navbarUl").classList.add("scrolled-ul");
  } else {
    // document.getElementById("navbar").className = "";
    document.getElementById("navbar").classList.remove("scrolled");
    document.getElementById("navbarUl").classList.remove("scrolled-ul");
    // document.getElementById("navbarUl").className = "";
  }
}

function ToggleMobile() {
  document.getElementById("navbarUl").classList.toggle("open");
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

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

// onReady(function() {
//   setVisible('#loading', false);
//   document.documentElement.style.overflowY = "visible";
//   document.querySelectorAll('.animate').forEach( el => {
//     el.classList.add("animation")
//     el.classList.remove("animate")
//   });
//   // document.body.style.overflow = "visible"
// });
window.addEventListener("load", function() {
  fadeOutEffect();
  // document.getElementsByClassName("loader-wrapper")[0].classList.add("hide")
});

function fadeOutEffect() {
  var fadeTarget = document.getElementById("loading");
  var fadeTop = 0;
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
      fadeTarget.style.top = fadeTop;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.035;
      fadeTarget.style.top = fadeTop + "px";
      fadeTop -= 20;
      setInterval(() => {
        fadeTarget.style.display = "none";
      }, 600);
      document.documentElement.style.overflowY = "visible";
      document.querySelectorAll(".animate").forEach(el => {
        el.classList.add("animation");
        el.classList.remove("animate");
      });
      document.body.style.overflow = "visible";
    } else {
      clearInterval(fadeEffect);
    }
  }, 10);
}