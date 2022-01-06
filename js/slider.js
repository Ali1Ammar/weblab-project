var slideIndex = 0;
var mainTimeout;
var directTimeout;
var slideCount = 3;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slideCount; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slideCount) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  mainTimeout = setTimeout(showSlides, 2000);
}

function directSelect(i) {
  clearTimeout(mainTimeout);
  clearTimeout(directTimeout);
  isSelectDirect = true;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  slideIndex = i;
  for (i = 0; i < slideCount; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  directTimeout = setTimeout(showSlides, 3000);
}

function plusSlides(isNext) {
  if (isNext) {
    slideIndex++;
    if (slideIndex > slideCount) {
      slideIndex = 1;
    }
    directSelect(slideIndex);
  } else {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = 3;
    }
    directSelect(slideIndex);
  }
}
