$( document ).ready(function() {
  console.log( "ready!" );
});


window.onload = function() {
const image = document.getElementById('image');
image.style.opacity = 2; 
};


window.addEventListener("scroll", function() {
var images = document.querySelectorAll(".fade-in");
images.forEach(function(image) {
  if (isElementInViewport(image)) {
    image.style.opacity = 1;
  }
});
});

function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}