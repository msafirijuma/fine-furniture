
// KITCHEN SLIDESHOW IMAGES

var kitchenSlideIndex = 1;
previewKitchenSlides(kitchenSlideIndex);


// Next/previous controls
function kitchenPlusSlides(n) {
  previewKitchenSlides(kitchenSlideIndex += n);
}

// Thumbnail image controls
function kitchenCurrentSlide(n) {
  previewKitchenSlides(kitchenSlideIndex = n);
}

function previewKitchenSlides(n) {
  var i;
  var kitchenSlides = document.getElementsByClassName("kitchen-slides");
  var dots = document.getElementsByClassName("kitchen-dot");
  if (n >kitchenSlides.length) {kitchenSlideIndex = 1}
  if (n < 1) {kitchenSlideIndex = kitchenSlides.length}
  for (i = 0; i <kitchenSlides.length; i++) {
     kitchenSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activated", "");
  }
 kitchenSlides[kitchenSlideIndex-1].style.display = "block";
  dots[kitchenSlideIndex-1].className += "activated";
}

