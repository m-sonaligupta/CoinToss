// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = randomNumber1 +".png";
var randomImageSource1 = "images/" +randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = randomNumber2 + ".png";
var randomImageSource2 = "images/" +randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// Declaring the Winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Head is the Winner!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Tail is the Winner!";
}else{
  document.querySelector("h1").innerHTML = "OMG! its a Draw";
}
