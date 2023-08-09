let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return arr[(Math.floor(Math.random() * arr.length))];
}

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

function showFinalScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'Winner of this game: Player!';
  } else if (playerScore < computerScore) {
    return 'Sorry the computer won :(';
  } else {
    return 'Game ends in a draw. Try again!';
  }
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

const finalScore = document.querySelector('.scores');
const displayFinalScore = document.createElement('span');

let buttonClicks = 0;

//Event listener
document.querySelectorAll('button').forEach(button => {debugger
  button.addEventListener('click', () => {

    buttonClicks++;
    
    //Show results
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

    //Show scores

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

    if (buttonClicks === 5) {
    const score = showFinalScore(playerScore, computerScore);
    displayFinalScore.textContent = score;
    finalScore.appendChild(displayFinalScore);
    buttonClicks = 0;
    }
  });
});
