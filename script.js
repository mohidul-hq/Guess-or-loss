// get random number
let random = parseInt(Math.random() * 100 + 1);
const darkMode = document.getElementById("darkMode");
const inputNumber = document.getElementById("inputNumber");
const submit = document.getElementById("submit");
const guessCount = document.getElementById("guessCount");
const guessLimit = document.getElementById("guessLimit");
const lowOrHi = document.getElementById("lowOrHi");
const startOver = document.getElementById("start");

const result = document.getElementById("result");

const p = document.createElement("p");
let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputNumber.value);
    validateGuess(guess);
    // console.log(guess);
  });
}

// validate the guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Place enter a valid number");
  } else if (guess < 1) {
    alert("Place enter a number more than 1");
  } else if (guess > 100) {
    alert("Place enter a number less than 100");
  } else {
    if (numGuess === 11) {
      displayMessage(guess);
      displayMessage(`Game Over! Random number was ${random}`);
      gameOver();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
// checking inputed number
function checkGuess(guess) {
  if (random === guess) {
    displayMessage(`You guessted Right!i!`);
    gameOver();
  } else if (random > guess) {
    displayMessage(`Your guess is TOO low`);
  } else if (random < guess) {
    displayMessage(`Your guess is TOO High`);
  }
}

function displayGuess(guess) {
  inputNumber.value = "";
  guessCount.innerHTML += `, ${guess} `;
  numGuess++;
  guessLimit.innerHTML = `  ${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = ` <h2> ${message} </h2>`;
}

function gameOver() {
  inputNumber.value = "";
  inputNumber.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    random = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessCount.innerHTML = "";
    lowOrHi.innerHTML = "";
    guessLimit.innerHTML = `  ${11 - numGuess}`;
    inputNumber.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
