function whoWon(player1, player2) {
  let correctPlays = ["rock", "paper", 'scissors'];
  if (player1 === player2) {
    return 'TIE!';
  }

  if (player1 === 'rock' && player2 === 'paper') {
    return 'Player 2 wins!';
  }

  else if (player1 === 'paper' && player2 === 'scissors') {
    return 'Player 2 wins!';
  }

  else if (player1 === 'scissors' && player2 === 'rock') {
    return 'Player 2 wins!';
  }
  else if (!correctPlays.includes(player1)) {
    return "an incorrect move was used";

  }
  else if (!correctPlays.includes(player2)) {
    return "an incorrect move was used";

  }
  else return 'Player 1 wins!';
}

module.exports = whoWon;