
// All Furniture SLIDESHOW IMAGES

var allSlideIndex = 1;
previewAllSlides(allSlideIndex);


// Next/previous controls
function allPlusSlides(n) {
  previewAllSlides(allSlideIndex += n);
}

// Thumbnail image controls
function allCurrentSlide(n) {
  previewAllSlides(allSlideIndex = n);
}

function previewAllSlides(n) {
  var i;
  var allSlides = document.getElementsByClassName("all-slides");
  var dots = document.getElementsByClassName("all-dot");
  if (n >allSlides.length) {allSlideIndex = 1}
  if (n < 1) {allSlideIndex =allSlides.length}
  for (i = 0; i <allSlides.length; i++) {
     allSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 allSlides[allSlideIndex-1].style.display = "block";
  dots[allSlideIndex-1].className += "activated";
}

