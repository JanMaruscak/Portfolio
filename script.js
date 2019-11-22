window.onscroll = function() {OnScroll()};

function OnScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").className = "scrolled";
    document.getElementById("navbarUl").className = "scrolled-ul";
  }
  else{
    document.getElementById("navbar").className = "";
    document.getElementById("navbarUl").className = "";
  }
}