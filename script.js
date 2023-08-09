let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return arr[(Math.floor(Math.random() * arr.length))];
}

let playerSelection = '';

const playerChoice = document.querySelector('.player-choice');
const displayPlayerChoice = document.createElement('span');

const comChoice = document.querySelector('.com-choice');
const displayCOMChoice = document.createElement('span');

const roundResult = document.querySelector('.choices');
const showRoundResult = document.createElement('span');

let playerScore = 0;
let computerScore = 0;

const selectPlayerScore = document.querySelector('.player-score');
const displayPlayerScore = document.createElement('span');

const selectComputerScore = document.querySelector('.com-score');
const displayComputerScore = document.createElement('span');

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    
    playerSelection = button.id;
    displayPlayerChoice.textContent = playerSelection;
    playerChoice.appendChild(displayPlayerChoice);
    console.log('You chose:', playerSelection);

    const computerSelection = getComputerChoice();
    displayCOMChoice.textContent = computerSelection;
    comChoice.appendChild(displayCOMChoice);
    console.log("Computer's choice:", computerSelection);

    const result = playRound(playerSelection, computerSelection);
    showRoundResult.textContent = result;
    roundResult.appendChild(showRoundResult);
    console.log(result);

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
    }
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
    }

    displayPlayerScore.textContent = playerScore;
    selectPlayerScore.appendChild(displayPlayerScore);

    displayComputerScore.textContent = computerScore;
    selectComputerScore.appendChild(displayComputerScore);
  });
});

function playRound(playerSelection, computerSelection) {

  switch(true) {
    case playerSelection === computerSelection:
      return "Draw!";
    case playerSelection === "rock" && computerSelection === "paper":
      return "You Lose! Paper beats Rock";
    case playerSelection === "paper" && computerSelection === "rock":
      return "You Win! Paper beats Rock";
    case playerSelection === "rock" && computerSelection === "scissors":
      return "You Win! Rock beats Scissors";
    case playerSelection === "scissors" && computerSelection === "rock":
      return "You Lose! Rock beats Scissors";
    case playerSelection === "paper" && computerSelection === "scissors":
      return "You Lose! Scissors beats Paper";
    case playerSelection === "scissors" && computerSelection === "paper":
      return "You Win! Scissors beats Paper";
    default:
      return "Please choose one of the options!";
  }
} 

function game() {

  let playerScore = 0;
  let computerScore = 0;

  //Start round
  function round() {

  if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
  }
  if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
  }
  console.log("player score:", playerScore, "computer score:", computerScore);
  return playRound(playerSelection, computerSelection);
    }

    for (let i = 0; i < 5; i++) {
       round();
    }

      console.log("Round :", round());

      console.log('Final score: ', 'player', playerScore, 'computer', computerScore);

      if (playerScore > computerScore) {
        console.log('Winner of this game: Player!');
      } else if (playerScore < computerScore) {
        console.log('Sorry the computer won :(');
      } else {
        console.log('Game ends in a draw. Try again!');
      }
}

//game();