//Navbar colour change

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var Nav = document.getElementById("myNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    Nav.classList.add("bg-black navbar-light");
    Nav.classList.remove("bg-dark navbar-dark");
  } else {
    Nav.classList.add("bg-dark navbar-dark");
    Nav.classList.remove("bg-black navbar-light");
}

//Images Animation

const toShow= document.querySelectorAll('.show-on-scroll');

observer= new IntersectionObserver((entries)=>{
	entries.forEach(entry=>{
		if(entry.intersectionRatio>0){
			entry.target.classList.add("is-visible");
		}
		else{
			entry.target.classList.remove('is-visible');
		}
	})
})

toShow.forEach(ele=>{
	observer.observe(ele)
	console.log(ele)
})