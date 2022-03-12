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
  return gameBoard;
}
setNewGame();
console.log(boardGrid);

// const newGameButton = document.querySelector("#new-game-button");
// newGameButton.addEventListener("click", setNewGame());
// a new board will generate whenever the New Game button is clicked

function placeNewTile() {
  let randomRow = getRandomNum(boardGrid.length);
  //   console.log(randomRow);
  let randomColumn = getRandomNum(boardGrid[0].length);
  //   console.log(randomColumn);
  if (boardGrid[randomRow][randomColumn] === 0) {
    boardGrid[randomRow][randomColumn] = 2;
    // console.log(boardGrid);
  } else {
    randomRow = getRandomNum(boardGrid.length);
    // console.log(randomRow);
    randomColumn = getRandomNum(boardGrid[0].length);
    // console.log(randomColumn);
  }

  //assign 2 variables, random row and random column
  //random row would be somewhere between 0 and boardgrid.length
  //random column would be anywhere between 0 and board[0].length
  //if boardGrid [random-row][random-column] === 0
  //then boardGrid [random-row][random-column] = 2
  //might have to run while loop
}
// placeNewTile();

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
// // generates random number between 0 and max - 1
