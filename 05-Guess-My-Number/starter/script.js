"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score").textContent;
let highScore = document.querySelector(".highscore").textContent;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("No number entered");
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage("Congrats! Correct number🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    score > highScore ? (highScore = score) : highScore;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Guess is too high ⏫" : "Guess is too low ⏬"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 😥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = document.querySelector(".score").textContent = 20;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  console.log("fuck you");
});
