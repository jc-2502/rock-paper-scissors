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

function playRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === computerChoice) {
    winner = 'tie';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    winner = 'human';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    winner = 'computer';
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
  return winner
}

function playGame() {
  // keep track of score
  let humanScore = 0;
  let computerScore = 0;

  const rounds = 5;
  for (let round = 1; round <= rounds; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'human') {
      ++humanScore;
    } else if (roundWinner === 'computer') {
      ++computerScore;
    }
  }

  let resultMessage;
  if (humanScore > computerScore) {
    resultMessage = 'you won - '+humanScore+'-'+computerScore;
    ++humanScore;
  } else if (computerScore > humanScore) {
    resultMessage = 'you lost - '+humanScore+'-'+computerScore;
    ++computerScore;
  } else {
    resultMessage = 'tie - '+humanScore+'-'+computerScore;
  }
  console.log(resultMessage);
}

playGame()
