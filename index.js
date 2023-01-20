var imageSelector = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomNumber1 = Math.floor((Math.random()*6));
var randomNumber2 = Math.floor((Math.random()*6));
var randomImage1 = imageSelector[randomNumber1];
var randomImage2 = imageSelector[randomNumber2];
//right over here
document.querySelector(".img1").setAttribute("src","images/"+randomImage1);
document.querySelector(".img2").setAttribute("src","images/"+randomImage2);
//right over here
if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if (randomImage1 === randomImage2) {
    document.querySelector("h1").innerHTML= "Its a draw!";
}
else {
    document.querySelector("h1").innerHTML= "Player 2 wins!";
}
