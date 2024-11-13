// Get elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const yourChoice = document.getElementById("your-choice");
const computerChoice = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");


const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function determineWinner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    return "It's a Tie!";
  } else if (
    (userChoice === "Rock" && compChoice === "Scissors") ||
    (userChoice === "Paper" && compChoice === "Rock") ||
    (userChoice === "Scissors" && compChoice === "Paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}


function playGame(userChoice) {
  const compChoice = getComputerChoice();
  
  yourChoice.textContent = userChoice;
  computerChoice.textContent = compChoice;
  
  const result = determineWinner(userChoice, compChoice);
  resultDisplay.textContent = result;
}

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
