// keep track of score
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const displayedScore = document.querySelector('#score');
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

function getCurrentScore() {
  return humanScore + ' - ' + computerScore
}

function updateDisplayedScore() {
  displayedScore.textContent = 'you ' + getCurrentScore() + ' computer';
};

function displayFinalResultMessage(humanScore, computerScore) {
  result = document.createElement('p');

  if (humanScore > computerScore) {
    result.textContent = 'you won - ' + getCurrentScore();
  } else if (computerScore > humanScore) {
    result.textContent = 'you lost - ' + getCurrentScore();
  }

  result.id = 'final-result-msg';

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

  const roundResultDiv = document.createElement('div');
  const roundResult = document.createElement('p');
  const scoreAfterRound = document.createElement('p');

  if (humanChoice === computerChoice) {
    roundResult.textContent = 'tie - ' + humanChoice;
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    ++humanScore;
    roundResult.textContent = 'you won - ' + humanChoice + ' beats ' + computerChoice;
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    ++computerScore;
    roundResult.textContent = 'you lost - ' + humanChoice + ' loses to ' + computerChoice;
  }

  updateDisplayedScore();

  scoreAfterRound.textContent = getCurrentScore();

  roundResultDiv.classList.add('round-result-row');
  roundResult.classList.add('round-result');
  scoreAfterRound.classList.add('score-after-round');

  roundResultDiv.appendChild(roundResult);
  roundResultDiv.appendChild(scoreAfterRound);
  scoreLog.appendChild(roundResultDiv);

  checkIfGameOver();
}

// set starting score to 0 - 0
updateDisplayedScore();

buttons.forEach((button) => button.addEventListener("click", playRound));
