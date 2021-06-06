// console.log("Javascript linked!");

// adding source for both images
// document.getElementsByClassName("player1")[0].src = "images/dice6.png";
// document.getElementsByClassName("player2")[0].src = "images/dice6.png";

var randomNumber1 = Math.round(Math.random() * 5) + 1;

var picSrc1 = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("player1")[0].src = picSrc1;

var randomNumber2 = Math.round(Math.random() * 5) + 1;

var picSrc2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("player2")[0].src = picSrc2;

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins";
} else if (randomNumber1 == randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Draw";
}
// console.log (randomNumber1);