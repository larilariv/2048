const gameBoard = document.querySelector(".game-board");

let boardGrid = [];

let boardTile;
let xAxis;
let yAxis;

function setNewGame() {
  for (let xAxis = 0; xAxis < 4; xAxis++) {
    for (let yAxis = 0; yAxis < 4; yAxis++) {
      boardTile = document.createElement("div");
      boardTile.className = "board-tile";
      boardTile.classList.add(`x-${xAxis}`);
      boardTile.classList.add(`y-${yAxis}`);
      boardTile.setAttribute("value", 0);
      gameBoard.append(boardTile);
    }
    boardGrid.push(document.getElementsByClassName(`x-${xAxis}`));
  }
  genNewTile();
  genNewTile();
  return gameBoard;
}
setNewGame();
// find way to load boardGrid on page load so the board is set up to play right away
// find way to reload boardGrid on click of New Game button

// const newGameButton = document.querySelector("#new-game-button");
// newGameButton.addEventListener("click", setNewGame());
// a new board will generate whenever the New Game button is clicked

function genNewTile() {
  let randomRow = getRandomNum(boardGrid.length);
  let randomColumn = getRandomNum(boardGrid[0].length);
  randomTile = boardGrid[randomRow][randomColumn];
  if (randomTile.getAttribute("value") === "0") {
    randomTile.setAttribute("value", 2);
    randomTile.innerText = randomTile.getAttribute("value");
  } else {
    genNewTile();
  }
}

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
