const gameBoard = document.querySelector(".game-board");
// assigns div with class of game-board to gameBoard

let boardGrid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
// layout of board grid,

function setNewGame() {
  for (let x = 0; x < 4; x++) {
    // x represents row index
    for (let y = 0; y < 4; y++) {
      // y represents column index
      let boardTile = document.createElement("div");
      boardTile.className = "board-tile";
      boardTile.id = `(${x}, ${y})`;
      boardTile.setAttribute("value", 0);
      // creates a div element with a class of board-tile, id of (x, y), value of 0
      // to represent every space available on the grid
      gameBoard.append(boardTile);
      // board-tile divs are added to the game-board div
    }
  }
}
const newGameButton = document.querySelector("#new-game-button");
newGameButton.addEventListener("click", setNewGame());
// a new board will generate whenever the New Game button is clicked

// function placeNewTile() {
// if ()
// }

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
// // generates random number between 0 and max - 1
