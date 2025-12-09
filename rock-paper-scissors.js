// keep track of score
let humanScore;
let computerScore;

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

function updateScore(result) {
  if (result === 'human') {
    ++humanScore;
  } else if (result === 'computer') {
    ++computerScore;
  }
}

function getCurrentScore() {
  return humanScore + ' - ' + computerScore
}

function updateDisplayedScore() {
  displayedScore.textContent = 'you ' + getCurrentScore() + ' computer';
};

function displayFinalResultMessage(humanScore, computerScore) {
  const resultMsg = document.createElement('p');

  if (humanScore > computerScore) {
    resultMsg.textContent = 'you won - ' + getCurrentScore();
  } else if (computerScore > humanScore) {
    resultMsg.textContent = 'you lost - ' + getCurrentScore();
  }

  resultMsg.id = 'final-result-msg';

  scoreLog.appendChild(resultMsg);
}

function stopGame() {
  buttons.forEach((button) => button.removeEventListener("click", playRound));
}

function displayPlayAgainButton() {
  const playAgainButton = document.createElement('button');
  const body = document.querySelector('body');

  playAgainButton.textContent = 'play again';
  playAgainButton.id = 'play-again';

  playAgainButton.addEventListener("click", startNewGame);

  body.appendChild(playAgainButton);
}

function checkIfGameOver() {
  if (!(humanScore < 5 && computerScore < 5)) {
    displayFinalResultMessage(humanScore, computerScore);
    stopGame();
    displayPlayAgainButton();
  }
}

function displayRoundResultLine(result, humanChoice, computerChoice) {
  const roundResultDiv = document.createElement('div');
  const roundResult = document.createElement('p');
  const scoreAfterRound = document.createElement('p');

  if (result === 'tie') {
    roundResult.textContent = 'tie - ' + humanChoice;
  } else if (result === 'human') {
    roundResult.textContent = 'you won - ' + humanChoice + ' beats ' + computerChoice;
  } else if (result === 'computer') {
    roundResult.textContent = 'you lost - ' + humanChoice + ' loses to ' + computerChoice;
  }

  scoreAfterRound.textContent = getCurrentScore();

  roundResultDiv.classList.add('round-result-row');
  roundResult.classList.add('round-result');
  scoreAfterRound.classList.add('score-after-round');

  roundResultDiv.appendChild(roundResult);
  roundResultDiv.appendChild(scoreAfterRound);
  scoreLog.appendChild(roundResultDiv);
}

function playRound(event) {
  const humanChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  let result;

  if (humanChoice === computerChoice) {
    result = 'tie';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
    result = 'human';
  } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
    result = 'computer';
  }

  updateScore(result);

  displayRoundResultLine(result, humanChoice, computerChoice);

  updateDisplayedScore();

  checkIfGameOver();
}

function startNewGame() {
  // set starting score to 0 - 0
  humanScore = 0;
  computerScore = 0;

  updateDisplayedScore();

  // clear score log
  const scoreLogEntries = document.querySelectorAll('#score-log > *');
  scoreLogEntries.forEach((entry) => entry.remove());

  // remove play again button if on page (not first game)
  const playAgainButton = document.querySelector('#play-again');
  if (playAgainButton) playAgainButton.remove();

  buttons.forEach((button) => button.addEventListener("click", playRound));
}

startNewGame();
