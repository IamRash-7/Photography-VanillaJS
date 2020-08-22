window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var Nav = document.getElementById("myNav");
var x = window.matchMedia("(min-width: 992px)")
var sticky = header.offsetTop;

function myFunction(x) {
  if (window.pageYOffset > sticky) {
    Nav.classList.add("bg-black");
    Nav.classList.remove("bg-dark");
  } else {
    Nav.classList.add("bg-dark");
    Nav.classList.remove("bg-black");
  }
}