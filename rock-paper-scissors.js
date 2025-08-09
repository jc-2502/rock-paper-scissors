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
  const input = parseInt(prompt('enter 1/2/3 for rock/paper/scisssors:'));
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
  if (humanChoice === computerChoice) {
    console.log('tie - '+humanChoice);
    return 'tie';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    console.log('you won - '+humanChoice+' beats '+computerChoice);
    return 'human';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    console.log('you lost - '+humanChoice+' loses to '+computerChoice);
    return 'computer';
  }
}

function printResultMessage(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log('you won - '+humanScore+'-'+computerScore);
  } else if (computerScore > humanScore) {
    console.log('you lost - '+humanScore+'-'+computerScore);
  } else {
    console.log('tie - '+humanScore+'-'+computerScore);
  }
}

function playGame() {
  // keep track of score
  let humanScore = 0;
  let computerScore = 0;

  const rounds = 5;
  for (let round = 1; round <= rounds; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'human') {
      ++humanScore;
    } else if (roundWinner === 'computer') {
      ++computerScore;
    }
  }

  printResultMessage(humanScore, computerScore)
}

playGame()
