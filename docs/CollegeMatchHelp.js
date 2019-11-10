function helpQuestion()
{
  var button = document.getElementById("button");
  button.addEventListener("click",event =>
  {
    var input = document.getElementById("question");
    var faqQuestions = document.getElementById("FAQ");
    var questionDiv = document.createElement("div");
    var unorderedList = document.createElement("ul");
    var listItem = document.createElement("li");

    faqQuestions.appendChild(questionDiv);
    faqQuestions.appendChild(unorderedList);
    unorderedList.appendChild(listItem);
    listItem.appendChild(document.createTextNode(input.value));
  } );
}
window.onload = helpQuestion;
