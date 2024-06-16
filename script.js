if (
  localStorage.getItem("colorMode") === null ||
  localStorage.getItem("colorMode") === "dark"
) {
  ToggleDarkMode(document.getElementById("darkModeSlider"));
}

window.onscroll = function () {
  OnScroll();
};
var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

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
var loaded = false;

document.addEventListener("DOMContentLoaded", function () {
  var loadingElement = document.getElementById("loading");
  loadingElement.style.display = "none";
  setTimeout(function () {
    if (!loaded) {
      var loadingElement = document.getElementById("loading");
      if (loadingElement) {
        loadingElement.style.display = "flex";
        document.documentElement.style.overflowY = "hidden";
      }
    }
  }, 500);
});
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
    document.getElementById("navbar").classList.add("scrolled");
    document.getElementById("navbarUl").classList.add("scrolled-ul");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
    document.getElementById("navbarUl").classList.remove("scrolled-ul");
  }
}

function ToggleMobile() {
  document.getElementById("navbarUl").classList.toggle("open");
  if (document.getElementById("navbarUl").classList.contains("open")) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "visible";
  }
}
function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}
window.addEventListener("load", function () {
  loaded = true;
  fadeOutEffect();
});

function fadeOutEffect() {
  var fadeTarget = document.getElementById("loading");
  var fadeTop = 0;
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
      fadeTarget.style.top = fadeTop + "px"; // Ensure 'px' is added here
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.035;
      fadeTarget.style.top = fadeTop + "px";
      fadeTop -= 20;
      setInterval(() => {
        fadeTarget.style.display = "none";
      }, 600);
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

function ToggleDarkMode(element) {
  document.body.classList.toggle("darkMode");
  if (element != null) element.classList.toggle("checked");
  let isDarkMode = document.body.classList.contains("darkMode");
  localStorage.setItem("colorMode", isDarkMode ? "dark" : "light");
}
