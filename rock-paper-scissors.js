// keep track of score
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const scoreLog = document.querySelector('#score-log');

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

function updateDisplayedScore() {
  score.textContent = 'you '+humanScore+' - '+computerScore+' computer';
};

function displayFinalResultMessage(humanScore, computerScore) {
  result = document.createElement('p');

  if (humanScore > computerScore) {
    result.textContent = 'you won - '+humanScore+'-'+computerScore;
  } else if (computerScore > humanScore) {
    result.textContent = 'you lost - '+humanScore+'-'+computerScore;
  }

  scoreLog.appendChild(result);
}

function checkIfGameOver() {
  if (!(humanScore < 5 && computerScore < 5)) {
    displayFinalResultMessage(humanScore, computerScore);
    stopGame();
  }
}

function stopGame() {
  buttons.forEach((button) => button.removeEventListener("click", playRound));
}

function playRound(event) {
  const humanChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  const roundResult = document.createElement('p');

  if (humanChoice === computerChoice) {
    roundResult.textContent = 'tie - '+humanChoice;
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    roundResult.textContent = 'you won - '+humanChoice+' beats '+computerChoice;
    ++humanScore;
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    roundResult.textContent = 'you lost - '+humanChoice+' loses to '+computerChoice;
    ++computerScore;
  }

  updateDisplayedScore();
  scoreLog.appendChild(roundResult);

  checkIfGameOver();
}

// set starting score to 0 - 0
updateDisplayedScore();

buttons.forEach((button) => button.addEventListener("click", playRound));
