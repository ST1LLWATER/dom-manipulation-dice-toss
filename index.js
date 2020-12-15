var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = `./Dice/Dicey-${randomNumber}.png`;

var randomDiceImage = "./Dice/Dicey-" + randomNumber1 + ".png";

var randomDiceImage1 = "./Dice/Dicey-" + randomNumber2 + ".png";

// var randomImageSrc = `./Dice/Dicey- ${randomDiceImage} .png`;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage1);
