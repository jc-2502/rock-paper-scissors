// function getComputerChoice() {
//   let randomNumber = Math.floor(Math.random() * 3) + 1;
//   if (randomNumber === 1) {
//     return 'rock';
//   } else if (randomNumber === 2) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function getHumanChoice() {
  let input = parseInt(prompt('enter 1/2/3 for rock/paper/scisssors:'));
  switch (input) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

// keep track of score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      winner = 'tie';
    } else if (computerChoice === 'paper') {
      winner = 'computer';
    } else if (computerChoice === 'scissors') {
      winner = 'human';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      winner = 'human';
    } else if (computerChoice === 'paper') {
      winner = 'tie';
    } else if (computerChoice === 'scissors') {
      winner = 'computer';
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winner = 'computer';
    } else if (computerChoice === 'paper') {
      winner = 'human';
    } else if (computerChoice === 'scissors') {
      winner = 'tie';
    }
  }

  let message;
  if (winner === 'human') {
    message = 'you won - '+humanChoice+' beats '+computerChoice;
  } else if (winner === 'computer') {
    message = 'you lost - '+computerChoice+' beats '+humanChoice;
  } else {
    message = 'tie - '+humanChoice;
  }
  console.log(message);

  ++humanScore;
  ++computerScore;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
