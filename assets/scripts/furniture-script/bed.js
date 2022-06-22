
// BED SLIDESHOW IMAGES

var bedSlideIndex = 1;
previewBedSlides(bedSlideIndex);


// Next/previous controls
function bedPlusSlides(n) {
  previewBedSlides(bedSlideIndex += n);
}

// Thumbnail image controls
function bedCurrentSlide(n) {
  previewBedSlides(bedSlideIndex = n);
}

function previewBedSlides(n) {
  var i;
  var bedSlides = document.getElementsByClassName("bed-slides");
  var dots = document.getElementsByClassName("bed-dot");
  if (n >bedSlides.length) {bedSlideIndex = 1}
  if (n < 1) {bedSlideIndex = bedSlides.length}
  for (i = 0; i <bedSlides.length; i++) {
     bedSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 bedSlides[bedSlideIndex-1].style.display = "block";
  dots[bedSlideIndex-1].className += "activated";
}

