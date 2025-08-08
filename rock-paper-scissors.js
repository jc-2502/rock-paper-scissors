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
  let input = parseInt(prompt('enter 1/2/3:'));
  switch (input) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}
