// Write the logic to get the computer choice
function getComputerChoice() {
  if (Math.random() < 0.3) {
    return "rock";
  } else if (Math.random() < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Write the logic to get the human choice
function getHumanChoice() {
  const userInput = prompt("Please choose between rock, paper, and scissors.").toLocaleLowerCase();
  if (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
    alert("Invalid input!");
    getHumanChoice()
  } else {
    return userInput;
  }
}

// Declare the players score variables
let computerScore = 0;
let humanScore = 0;

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  console.log("Computer's choice:", computerChoice)
  humanChoice = getHumanChoice();
  console.log("Your choice:", humanChoice)

    //COM win scenarios
  if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore++;
    console.log('“You lose! Paper beats Rock”')
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    computerScore++;
    console.log('“You lose! Rock beats Scissors')
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore++;
    console.log('“You lose! Scissors beats Paper”')
    //Human win scenarios
  } else if (computerChoice === 'rock' && humanChoice === 'paper') {
    humanScore++;
    console.log('“You win! Paper beats Rock”')
  } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
    humanScore++;
    console.log('“You win! Rock beats Scissors')
  } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
    humanScore++;
    console.log('“You win! Scissors beats Paper”')
  } else {
    console.log("It's a draw!")
  }
}

// Write the logic to play the entire game
function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound();
    console.log("Scores:", computerScore, humanScore)
  }
  if (computerScore > humanScore) {
    console.log("Sorry, you lost the game!")
  } else if (humanScore > computerScore) {
    console.log("Congrats! You won :D")
  } else {
    console.log("We don't have a winner :(")
  }
}

playGame();