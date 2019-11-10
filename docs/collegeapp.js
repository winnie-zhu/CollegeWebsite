function question()
{
//alert('ok');
var button = document.getElementById("search");
button.addEventListener("click",event =>
{
var input1 = document.getElementById("gpa");
var input2 = document.getElementById("sat");
var input3 = document.getElementById("act");
var input4 = document.getElementById("rank");
alert("GPA: " + input1.value + "\nSAT Score: " + input2.value + "\nACT Score: " + input3.value + "\nClass Rank: "  + input4.value);

} );

}
window.onload = question;
