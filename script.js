/* .js files add interaction to your website */
var factList = [
  "Experts say that by 2050 there may be more plastic than fish in the sea, or perhaps only plastic left.",/*0*/
  "A whopping 2 million plastic bags are used every minute worldwide",/*1*/
  "The average person eats 70,000 microplastics each year",/*2*/
  "73% of beach litter worldwide is plastic."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton){
myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
