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

$( document ).ready(function() {

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
  