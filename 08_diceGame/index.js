// alert("working...");

//Player 1
var randomNumberOne = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumberOne + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var imageOne = document.querySelectorAll('img')[0]; 

imageOne.setAttribute("src", randomImageSource);

//Player 2
var randomNumberTwo = Math.floor(Math.random() * 6 + 1); // 1-6

var randomImageSourceTwo = "images/dice" + randomNumberTwo + ".png";

document.querySelectorAll('img')[1].setAttribute('src', randomImageSourceTwo);

// change title (win case)

if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumberTwo > randomNumberOne) {
    document.querySelector('h1').innerHTML = "🚩 Player 2 wins!";   
}
else {
    document.querySelector('h1').innerHTML = "Draw!";
}
