let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
  } else {
    return "Please choose one of the options!"
  }
} 

function game() {
  function round1() {
  let playerSelection = prompt("Please enter your choice: Rock, paper or scissors");
  let computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
  }
  function round2() {
  let playerSelection = prompt("Please enter your choice: Rock, paper or scissors");
  let computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
  }
  function round3() {
    let playerSelection = prompt("Please enter your choice: Rock, paper or scissors");
    let computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
    }
    function round4() {
      let playerSelection = prompt("Please enter your choice: Rock, paper or scissors");
      let computerSelection = getComputerChoice();
      return playRound(playerSelection, computerSelection);
      }
      function round5() {
        let playerSelection = prompt("Please enter your choice: Rock, paper or scissors");
        let computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
        }
        console.log("Round 1:", round1());
        console.log("Round 2:", round2());
        console.log("Round 3:", round3());
        console.log("Round 4:", round4());
        console.log("Round 5:", round5());
}

console.log(game());