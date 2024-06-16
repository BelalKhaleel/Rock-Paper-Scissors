function getComputerChoice() {
  if (Math.random() < 0.3) {
    return "rock";
  } else if (Math.random() < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerScore = 0;
let humanScore = 0;

  let humanChoices = document.querySelector('.human-choices');
  humanChoices.addEventListener('click', playRound);
  
  function playRound(e) {
    // debugger
    let humanChoice = "";
    if (e.target.classList.contains('rock')) {
      humanChoice = 'rock';
    } else if (e.target.classList.contains('paper')) {
      humanChoice = 'paper';
    } else if (e.target.classList.contains('scissors')){
      humanChoice = 'scissors';
    }

    let computerChoice = getComputerChoice();

    const playerSelection = document.querySelector('.player-selection');
    playerSelection.textContent = humanChoice;

    const computerSelection = document.querySelector('.computer-selection');
    computerSelection.textContent = computerChoice;

    const roundResult = document.querySelector('.round-result');

    const playerScore = document.querySelector('.player-score');
    const comScore = document.querySelector('.computer-score');

    if (
      (computerChoice === 'paper' && humanChoice === 'rock') || 
      (computerChoice === 'rock' && humanChoice === 'scissors') || 
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      computerScore++;
      roundResult.textContent = `“You lose! ${computerChoice} beats ${humanChoice}”`;
    } else if (
      (computerChoice === 'rock' && humanChoice === 'paper') || 
      (computerChoice === 'scissors' && humanChoice === 'rock') || 
      (computerChoice === 'paper' && humanChoice === 'scissors')
    ) {
      humanScore++;
      roundResult.textContent = `“You win! ${humanChoice} beats ${computerChoice}”`;
    } else {
      roundResult.textContent = "“It's a draw!”";
    }
    comScore.textContent = computerScore;
    playerScore.textContent = humanScore;  
    
    const finalResult = document.querySelector('.final-result');
  
    if (computerScore === 5) {
      finalResult.textContent = "Sorry, you lost the game! :'(";
      humanChoices.removeEventListener('click', playRound)
    } else if (humanScore === 5) {
      finalResult.textContent = "Congrats! You won :D";
      humanChoices.removeEventListener('click', playRound)
    }
  }
