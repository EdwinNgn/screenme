const question = document.getElementById("how-it-works")
const warningMessage = document.getElementById("warning-message")

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



if (warningMessage){
  document.querySelector('.fa-exclamation-triangle').addEventListener("mouseover", mouseOverbis);
  document.querySelector('.fa-exclamation-triangle').addEventListener("mouseout", mouseOutbis);


  function mouseOverbis() {
    warningMessage.style.visibility = "visible";
  }

  function mouseOutbis() {
    warningMessage.style.visibility = "hidden";
  }
}
