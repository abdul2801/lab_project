let slideIndex = 0;
plusSlides(1)
setInterval(plusSlides,4000,1)


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides")
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}


let slideindex = 0;
PlusSlides(1)
setInterval(PlusSlides,4000,1)


function PlusSlides(n) {
  ShowSlides(slideindex += n);
}
function currentSlide(n) {
  ShowSlides(slideindex = n);
}

function ShowSlides(n) {
  console.log(slideindex)
  let i;
  let slides = document.getElementsByClassName("slide")
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideindex = 1}
  if (n < 1) {slideindex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
      }
  
  slides[slideindex-1].style.display = "block";
  dots[slideindex-1].className += " active";
  
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("actives");
    } else {
      reveals[i].classList.remove("actives");
    }
  }
}

window.addEventListener("scroll" , reveal)


var navbar = document.getElementsByClassName("navbar")[0];
var sticky = navbar.offsetTop

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
window.onscroll = function() {myFunction()};