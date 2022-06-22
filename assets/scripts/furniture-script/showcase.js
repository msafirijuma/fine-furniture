
// TV SHOWCASE SLIDESHOW IMAGES

var showcaseSlideIndex = 1;
previewShowcaseSlides(showcaseSlideIndex);


// Next/previous controls
function showcasePlusSlides(n) {
  previewShowcaseSlides(showcaseSlideIndex += n);
}

// Thumbnail image controls
function showcaseCurrentSlide(n) {
  previewShowcaseSlides(showcaseSlideIndex = n);
}

function previewShowcaseSlides(n) {
  var i;
  var showcaseSlides = document.getElementsByClassName("showcase-slides");
  var dots = document.getElementsByClassName("showcase-dot");
  if (n >showcaseSlides.length) {showcaseSlideIndex = 1}
  if (n < 1) {showcaseSlideIndex =showcaseSlides.length}
  for (i = 0; i <showcaseSlides.length; i++) {
     showcaseSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 showcaseSlides[showcaseSlideIndex-1].style.display = "block";
  dots[showcaseSlideIndex-1].className += "activated";
}

