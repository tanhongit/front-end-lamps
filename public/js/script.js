//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
var slideIndex2;
// KHai bào hàm hiển thị slide
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  //chuyển đến slide tiếp theo
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("box-content");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex2].style.display = "block";
  dots[slideIndex2].className += " active";
  //chuyển đến slide tiếp theo
  slideIndex2++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex2 > slides.length - 1) {
    slideIndex2 = 0
  }
  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides2(slideIndex2 = 0);


function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

