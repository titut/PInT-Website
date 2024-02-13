var timeoutHandle;
var page = "home";
var data = null;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  window.clearTimeout(timeoutHandle);
  timeoutHandle = window.setTimeout(()=>{
    showDivs(slideIndex += 1);
  }, 15000);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-images");
  var y = document.getElementsByClassName("slide-progress-dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.opacity = 0.4;
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.opacity = 1;
}

timeoutHandle = window.setTimeout(()=>{
  showDivs(slideIndex += 1);
}, 15000);

document.getElementsByClassName("donate_box")[0].addEventListener("click", function(){
  location.href = "/events";
})

document.getElementsByClassName("donate_box")[1].addEventListener("click", function(){
  location.href = "/partner-with-us";
})