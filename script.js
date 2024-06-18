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

let svgs = document.querySelectorAll('svg');
      
  function playRound(e) {
    // debugger

    svgs.forEach(svg => {
      svg.classList.remove('red');
      svg.classList.remove('green');
      svg.classList.remove('blue');
      svg.classList.add('black');
    });

    let humanChoice = "";
    console.log(e.target);
    if (e.target.closest('.rock')) {
      humanChoice = 'rock';
    } else if (e.target.closest('.paper')) {
      humanChoice = 'paper';
    } else if (e.target.closest('.scissors')){
      humanChoice = 'scissors';
    }

    let computerChoice = getComputerChoice();

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
      const svg = e.target.closest('svg');
      svg.classList.remove('black');
      svg.classList.add('red');
    } else if (
      (computerChoice === 'rock' && humanChoice === 'paper') || 
      (computerChoice === 'scissors' && humanChoice === 'rock') || 
      (computerChoice === 'paper' && humanChoice === 'scissors')
    ) {
      humanScore++;
      roundResult.textContent = `“You win! ${humanChoice} beats ${computerChoice}”`;
      const svg = e.target.closest('svg');
      svg.classList.remove('black');
      svg.classList.add('green');
    } else {
      roundResult.textContent = `“It's a draw! Both chose ${computerChoice}”`;
      const svg = e.target.closest('svg');
      svg.classList.remove('black');
      svg.classList.add('blue');
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
