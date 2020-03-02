const question = document.getElementById("how-it-works")
if (question) {
  document.querySelector('.fa-question-circle').addEventListener("mouseover", mouseOver);
  document.querySelector('.fa-question-circle').addEventListener("mouseout", mouseOut);

  function mouseOver() {
    question.style.visibility = "visible";
  }

  function mouseOut() {
    question.style.visibility = "hidden";
  }
}

