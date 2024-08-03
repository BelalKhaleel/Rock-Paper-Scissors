let computerScore = 0;
let humanScore = 0;

const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector(".player-score");
const comScore = document.querySelector(".computer-score");
const finalResult = document.querySelector(".final-result");

let humanChoices = document.querySelector(".human-choices");
humanChoices.addEventListener("click", playRound);

let svgs = document.querySelectorAll("svg");

let resetRestartButton = document.querySelector('.restart-reset');
resetRestartButton.addEventListener('click', () => {
  computerScore = 0;
  humanScore = 0;
  roundResult.textContent = '';
  comScore.textContent = computerScore;
  playerScore.textContent = humanScore;
  finalResult.textContent = '';
  svgs.forEach(svg => svg.classList.add("black"));
});

function getComputerChoice() {
  if (Math.random() < 0.3) {
    return "rock";
  } else if (Math.random() < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(e) {
  
  function colorHumanChoice(e, color) {
    const svg = e.target.closest("svg");
    svg.classList.remove("black");
    svg.classList.add(color);
  }

  function colorComputerChoice(humanChoice, color) {
    switch (humanChoice) {
      case "rock":
        computerPaper.classList.remove("black");
        computerPaper.classList.add(color);
        break;
      case "paper":
        computerScissors.classList.remove("black");
        computerScissors.classList.add(color);
        break;
      case "scissors":
        computerRock.classList.remove("black");
        computerRock.classList.add(color);
        break;
    }
  }

  svgs.forEach((svg) => {
    svg.classList.remove("red");
    svg.classList.remove("green");
    svg.classList.remove("blue");
    svg.classList.add("black");
  });

  let humanChoice = "";
  if (e.target.closest(".rock")) {
    humanChoice = "rock";
  } else if (e.target.closest(".paper")) {
    humanChoice = "paper";
  } else if (e.target.closest(".scissors")) {
    humanChoice = "scissors";
  }

  let computerChoice = getComputerChoice();

  const computerRock = document.getElementById("rock");
  const computerPaper = document.getElementById("paper");
  const computerScissors = document.getElementById("scissors");
  const instructions = document.querySelector(".instructions");

  if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    roundResult.textContent = `“You lose! ${computerChoice} beats ${humanChoice}”`;
    colorHumanChoice(e, "red");
    colorComputerChoice(humanChoice, "green");
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore++;
    roundResult.textContent = `“You win! ${humanChoice} beats ${computerChoice}”`;
    colorHumanChoice(e, "green");
    colorComputerChoice(humanChoice, "red");
  } else {
    roundResult.textContent = `“It's a draw! Both chose ${computerChoice}”`;
    colorHumanChoice(e, "blue");
    computerPaper.classList.remove("black");
    computerPaper.classList.add("blue");
  }

  comScore.textContent = computerScore;
  playerScore.textContent = humanScore;

  if (computerScore === 5) {
    finalResult.textContent = "Sorry, you lost the game! :'(";
    instructions.classList.add("d-none");
  } else if (humanScore === 5) {
    finalResult.textContent = "Congrats! You won :D";
    instructions.classList.add("d-none");
  }
}
