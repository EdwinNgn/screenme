document.querySelector('.fa-question-circle').addEventListener("mouseover", mouseOver);
document.querySelector('.fa-question-circle').addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("how-it-works").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("how-it-works").style.visibility = "hidden";
}

