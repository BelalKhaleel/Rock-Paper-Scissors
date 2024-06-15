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
  let humanChoice = prompt("Please choose between rock, paper, and scissors.").toLocaleLowerCase();
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    alert("Invalid input!");
    humanChoice = prompt("Please choose between rock, paper, and scissors.").toLocaleLowerCase();
  } 
  return humanChoice;
}

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  console.log("Your choice:", humanChoice);
  computerChoice = getComputerChoice();
  console.log("Computer's choice:", computerChoice);
  
  // Declare the players score variables
  let computerScore = 0;
  let humanScore = 0;
  
    //COM win scenarios
  if (
    (computerChoice === 'paper' && humanChoice === 'rock') || 
    (computerChoice === 'rock' && humanChoice === 'scissors') || 
    (computerChoice === 'scissors' && humanChoice === 'paper')
  ) {
    computerScore++;
    console.log(`“You lose! ${computerChoice} beats ${humanChoice}”`);

    //Human win scenarios
  } else if (
    (computerChoice === 'rock' && humanChoice === 'paper') || 
    (computerChoice === 'scissors' && humanChoice === 'rock') || 
    (computerChoice === 'paper' && humanChoice === 'scissors')
  ) {
    humanScore++;
    console.log(`“You win! ${humanChoice} beats ${computerChoice}”`);
  } else {
    console.log("It's a draw!");
  }
}

// Write the logic to play the entire game
(function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound();
    console.log("Scores:", computerScore, humanScore);
  }
  if (computerScore > humanScore) {
    console.log("Sorry, you lost the game! :'(");
  } else if (humanScore > computerScore) {
    console.log("Congrats! You won :D")
  } else {
    console.log("We don't have a winner :(");
  }
})();