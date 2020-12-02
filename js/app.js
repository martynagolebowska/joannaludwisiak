// Fisrt slide

var slideIndex1 = 1;
showSlides1(slideIndex1);
//console.log(slideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
   // console.log(slideIndex);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
    console.log(slideIndex1);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "block";

}

// Second slide

var slideIndex = 1;
showSlides(slideIndex);
//console.log(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
   // console.log(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
    console.log(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}