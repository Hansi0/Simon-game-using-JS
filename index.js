var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var red = document.querySelector("#red");
var yellow = document.querySelector("#yellow");
var lightbutton = document.querySelectorAll("button");

function playRed() {
    var redAudio = new Audio('red.mp3');
    redAudio.play();
}

red.addEventListener("click", playRed);

function playYellow() {
    var yellowAudio = new Audio('yellow.mp3');
    yellowAudio.play();
}

yellow.addEventListener("click", playYellow);

function playBlue() {
    var blueAudio = new Audio('blue.mp3');
    blueAudio.play();
}

blue.addEventListener("click", playBlue);

function playGreen() {
    var greenAudio = new Audio('green.mp3');
    greenAudio.play();
}

green.addEventListener("click", playGreen);

function lightup() {
    var button = document.querySelectorAll("button");
    button.classList.add('lit');

}
GamepadButton.addEventListener("click", lightup);

