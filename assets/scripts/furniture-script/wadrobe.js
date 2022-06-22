
// WADROBE SLIDESHOW IMAGES

var wadrobeSlideIndex = 1;
previewWadrobeSlides(wadrobeSlideIndex);


// Next/previous controls
function wadrobePlusSlides(n) {
  previewWadrobeSlides(wadrobeSlideIndex += n);
}

// Thumbnail image controls
function wadrobeCurrentSlide(n) {
  previewWadrobeSlides(wadrobeSlideIndex = n);
}

function previewWadrobeSlides(n) {
  var i;
  var wadrobeSlides = document.getElementsByClassName("wadrobe-slides");
  var dots = document.getElementsByClassName("wadrobe-dot");
  if (n >wadrobeSlides.length) {wadrobeSlideIndex = 1}
  if (n < 1) {wadrobeSlideIndex = wadrobeSlides.length}
  for (i = 0; i <wadrobeSlides.length; i++) {
     wadrobeSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 wadrobeSlides[wadrobeSlideIndex-1].style.display = "block";
  dots[wadrobeSlideIndex-1].className += "activated";
}

