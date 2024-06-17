// Color mode
if (
  localStorage.getItem("colorMode") === null ||
  localStorage.getItem("colorMode") === "dark"
) {
  ToggleDarkMode(document.getElementById("darkModeSlider"));
}
function ToggleDarkMode(element) {
  document.body.classList.toggle("darkMode");
  if (element != null) element.classList.toggle("checked");
  let isDarkMode = document.body.classList.contains("darkMode");
  localStorage.setItem("colorMode", isDarkMode ? "dark" : "light");
}

// ------------------------------------------------------------------ //


// Show on scroll
window.onscroll = function () {
  OnScroll();
};
var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

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

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });

  scroll(loop);
}
function OnScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("scrolled");
    document.getElementById("navbarUl").classList.add("scrolled-ul");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
    document.getElementById("navbarUl").classList.remove("scrolled-ul");
  }
}
// ------------------------------------------------------------------ //


// Loading screen
var loaded = false;
document.addEventListener("DOMContentLoaded", function () {
  var loadingElement = document.getElementById("loading");
  loadingElement.style.display = "none";
  document.querySelectorAll(".animate").forEach(function (el) {
    el.classList.add("animation");
    el.classList.remove("animate");
  });
  setTimeout(function () {
    if (!loaded) {
      document.querySelectorAll(".animation").forEach(function (el) {
        el.classList.add("animate");
        el.classList.remove("animation");
      });
      var loadingElement = document.getElementById("loading");
      if (loadingElement) {
        loadingElement.style.display = "flex";
        document.documentElement.style.overflowY = "hidden";
      }
    }
  }, 500);
});

function fadeOutEffect() {
  var fadeTarget = document.getElementById("loading");
  var fadeTop = 0;
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
      fadeTarget.style.top = fadeTop + "px";
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.035;
      fadeTarget.style.top = fadeTop + "px";
      fadeTop -= 20;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.style.display = "none";
      document.documentElement.style.overflowY = "visible";
      document.body.style.overflow = "visible";
      document.querySelectorAll(".animate").forEach(function (el) {
        el.classList.add("animation");
        el.classList.remove("animate");
      });
    }
  }, 10);
}
window.addEventListener("load", function () {
  loaded = true;
  fadeOutEffect();
});
// ------------------------------------------------------------------ //

// Hamburger menu
function ToggleMobile() {
  document.getElementById("navbarUl").classList.toggle("open");
  if (document.getElementById("navbarUl").classList.contains("open")) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "visible";
  }
}
// ------------------------------------------------------------------ //


// Read more button
function ReadMore(el) {
  let project = el.parentElement.parentElement.parentElement;
  let projects = project.parentElement.querySelectorAll(".project.read-more");
  let isReadMore = project.classList.contains("read-more");
  projects.forEach((element) => {
    if (element.classList !== null) {
      element.classList.remove("read-more");
      element.querySelectorAll(".read-more-button")[0].innerText =
        "Read more . . .";
    }
  });

  if (!isReadMore) {
    el.innerText = "Read less . . .";
    project.classList.add("read-more");
  } else {
    el.innerText = "Read more . . .";
    project.classList.remove("read-more");
  }
}

// ------------------------------------------------------------------ //