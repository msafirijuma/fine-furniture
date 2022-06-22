
// SOFA SLIDESHOW IMAGES

var sofaSlideIndex = 1;
previewSofaSlides(sofaSlideIndex);


// Next/previous controls
function sofaPlusSlides(n) {
  previewSofaSlides(sofaSlideIndex += n);
}

// Thumbnail image controls
function sofaCurrentSlide(n) {
  previewSofaSlides(sofaSlideIndex = n);
}

function previewSofaSlides(n) {
  var i;
  var sofaSlides = document.getElementsByClassName("sofa-slides");
  var dots = document.getElementsByClassName("sofa-dot");
  if (n >sofaSlides.length) {sofaSlideIndex = 1}
  if (n < 1) {sofaSlideIndex = sofaSlides.length}
  for (i = 0; i <sofaSlides.length; i++) {
     sofaSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 sofaSlides[sofaSlideIndex-1].style.display = "block";
  dots[sofaSlideIndex-1].className += "activated";
}

