
// DINNING SLIDESHOW IMAGES

var dinningSlideIndex = 1;
previewDinningSlides(dinningSlideIndex);


// Next/previous controls
function dinningPlusSlides(n) {
  previewDinningSlides(dinningSlideIndex += n);
}

// Thumbnail image controls
function dinningCurrentSlide(n) {
  previewDinningSlides(dinningSlideIndex = n);
}

function previewDinningSlides(n) {
  var i;
  var dinningSlides = document.getElementsByClassName("dinning-slides");
  var dots = document.getElementsByClassName("dinning-dot");
  if (n >dinningSlides.length) {dinningSlideIndex = 1}
  if (n < 1) {dinningSlideIndex = dinningSlides.length}
  for (i = 0; i <dinningSlides.length; i++) {
     dinningSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 dinningSlides[dinningSlideIndex-1].style.display = "block";
  dots[dinningSlideIndex-1].className += "activated";
}

