function readMore() {
  var dots = document.getElementById("dots");
  var fullText = document.getElementById("fullText");
  var toggleMore= document.getElementById("more");
  // var detailBtn = document.getElementById("details");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    toggleMore.innerHTML = "More"; 
    fullText.style.display = "none";
  } else {
    dots.style.display = "none";
    // dots.remove();
    // toggleMore.innerHTML = "Less"; 
    toggleMore.innerHTML = ""; 
    fullText.style.display = "inline";
  }
}