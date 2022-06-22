
// OFFICE SLIDESHOW IMAGES

var officeSlideIndex = 1;
previewOfficeSlides(officeSlideIndex);


// Next/previous controls
function officePlusSlides(n) {
  previewOfficeSlides(officeSlideIndex += n);
}

// Thumbnail image controls
function officeCurrentSlide(n) {
  previewOfficeSlides(officeSlideIndex = n);
}

function previewOfficeSlides(n) {
  var i;
  var officeSlides = document.getElementsByClassName("office-slides");
  var dots = document.getElementsByClassName("office-dot");
  if (n >officeSlides.length) {officeSlideIndex = 1}
  if (n < 1) {officeSlideIndex = officeSlides.length}
  for (i = 0; i <officeSlides.length; i++) {
     officeSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 officeSlides[officeSlideIndex-1].style.display = "block";
  dots[officeSlideIndex-1].className += "activated";
}

