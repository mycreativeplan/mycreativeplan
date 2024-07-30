/*Scroll indicator*/
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


/*Onze diensten*/
const circle = document.getElementById('circle');
const path = document.getElementById('path');
const pathLength = 2 * Math.PI * 150;
const duration = 5000; // Duration of the animation in milliseconds

function animateCircle(timestamp) {
  const elapsed = timestamp % duration;
  const progress = elapsed / duration;
  const angle = progress * 2 * Math.PI - Math.PI / 2; // Subtracting Math.PI / 2 to start from the top

  const x = 200 + 150 * Math.cos(angle);
  const y = 200 + 150 * Math.sin(angle);

  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);

  requestAnimationFrame(animateCircle);
}

requestAnimationFrame(animateCircle);

/* Webdesign slideshow gallery */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// Ensure the script runs after the DOM is fully loaded
window.onload = function() {
  showSlides(slideIndex);
};