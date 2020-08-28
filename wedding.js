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

var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
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

$( document ).ready(function() {

  // Carousel
  $( ".carousel .carousel-inner" ).swipe( {
  swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
      this.parent( ).carousel( 'next' );
  },
  swipeRight: function ( ) {
      this.parent( ).carousel( 'prev' );
  },
  threshold: 0,
  tap: function(event, target) {
      window.location = $(this).find('.carousel-item.active a').attr('href');
  },
  excludedElements:"label, button, input, select, textarea, .noSwipe"
  } );

  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
      return false;
  });  

});
  