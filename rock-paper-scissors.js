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

function playRound(event) {
  const humanChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  let result;

  if (humanChoice === computerChoice) {
    console.log('tie - '+humanChoice);
    result = 'tie';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    console.log('you won - '+humanChoice+' beats '+computerChoice);
    result = 'human';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    console.log('you lost - '+humanChoice+' loses to '+computerChoice);
    result = 'computer';
  }

  // if (result === 'human') {
  //   ++humanScore;
  // } else if (result === 'computer') {
  //   ++computerScore;
  // }
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
  // let humanScore = 0;
  // let computerScore = 0;

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => button.addEventListener("click", playRound));

  // printResultMessage(humanScore, computerScore)
}

playGame()
