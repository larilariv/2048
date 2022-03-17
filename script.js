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
  //   return gameBoard;
}
setNewGame();
// find way to load boardGrid on page load so the board is set up to play right away
// find way to reload boardGrid on click of New Game button
//~10 lines of code 30min of work
//Possibly a for loop that run through each square, either set it's innerHTML to blank
// $("#mydiv").load(location.href + " #mydiv");
//Highest Score- look into local storage

// $("#new-game-Button").click(setNewGame() {
//   $(".game-board").load(".game-board");
// })

// function resetBoard() {
//   $(".game-board").load(location.href + " .game-board .board-tile");
// }


function reload() {
reload = location.reload();
}

const newGameButton = document.querySelector("#new-game-button");
newGameButton.addEventListener("click", reload, false);
//^Works for reloading the whole page on click of New Game button
// need to work on on reloading only the board on click of New Game Button



function genNewTile() {
  let randomRow = getRandomNum(boardGrid.length);
  let randomColumn = getRandomNum(boardGrid[0].length);
  randomTile = boardGrid[randomRow][randomColumn];
  if (randomTile.getAttribute("value") == 0) {
    randomTile.setAttribute("value", 2);
  } else {
    genNewTile();
  }
}

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

let currentTile;
let nextTile;
let tileValue;

function moveTilesUp() {
  for (let yAxis = 0; yAxis <= 3; yAxis++) {
    for (let xAxis = 1; xAxis <= 3; xAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) === parseInt(boardGrid[xAxis - 1][yAxis].getAttribute("value"))
        ) {sumOfTiles = parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) + parseInt(boardGrid[xAxis - 1][yAxis].getAttribute("value"));
          boardGrid[xAxis - 1][yAxis].setAttribute("value", sumOfTiles);
        }
        while (
          parseInt(boardGrid[xAxis - 1][yAxis].getAttribute("value")) == 0
        ) {
          boardGrid[xAxis - 1][yAxis].setAttribute("value", parseInt(boardGrid[xAxis][yAxis].getAttribute("value")));
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          xAxis--;
          if (xAxis == 0) break;
        }
      }
    }
  }
  genNewTile();
}
function moveTilesLeft() {
  for (let xAxis = 0; xAxis <= 3; xAxis++) {
    for (let yAxis = 1; yAxis <= 3; yAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) ===parseInt(boardGrid[xAxis][yAxis - 1].getAttribute("value"))) {
          sumOfTiles = parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) + parseInt(boardGrid[xAxis][yAxis - 1].getAttribute("value"));
          boardGrid[xAxis][yAxis - 1].setAttribute("value", sumOfTiles);
        }
        while (parseInt(boardGrid[xAxis][yAxis - 1].getAttribute("value")) == 0) {
          boardGrid[xAxis][yAxis - 1].setAttribute("value", parseInt(boardGrid[xAxis][yAxis].getAttribute("value")));
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          yAxis--;
          if (yAxis == 0) break;
        }
      }
    }
  }
  genNewTile();
}
function moveTilesDown() {
  for (let yAxis = 3; yAxis >= 0; yAxis--) {
    for (let xAxis = 2; xAxis >= 0; xAxis--) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) === parseInt(boardGrid[xAxis + 1][yAxis].getAttribute("value"))) {
          sumOfTiles = parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) + parseInt(boardGrid[xAxis + 1][yAxis].getAttribute("value"));
          boardGrid[xAxis + 1][yAxis].setAttribute("value", sumOfTiles);
        }
        while (parseInt(boardGrid[xAxis + 1][yAxis].getAttribute("value")) == 0) {
          boardGrid[xAxis + 1][yAxis].setAttribute("value", parseInt(boardGrid[xAxis][yAxis].getAttribute("value")));
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          xAxis++;
          if (xAxis == 3) break;
        }
      }
    }
  }
  genNewTile();
}
function moveTilesRight() {
  for (let xAxis = 3; xAxis >= 0; xAxis--) {
    for (let yAxis = 2; yAxis >= 0; yAxis--) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) === parseInt(boardGrid[xAxis][yAxis + 1].getAttribute("value"))) {
          sumOfTiles = parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) + parseInt(boardGrid[xAxis][yAxis + 1].getAttribute("value"));
          boardGrid[xAxis][yAxis + 1].setAttribute("value", sumOfTiles);
        }
        while (parseInt(boardGrid[xAxis][yAxis + 1].getAttribute("value")) == 0) {
          boardGrid[xAxis][yAxis + 1].setAttribute("value", parseInt(boardGrid[xAxis][yAxis].getAttribute("value")));
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          xAxis++;
          if (xAxis == 3) break;
        }
      }
    }
  }
  genNewTile();
}
const upButton = document.querySelector("#up-button");
const rightButton = document.querySelector("#right-button");
const downButton = document.querySelector("#down-button");
const leftButton = document.querySelector("#left-button");

upButton.addEventListener("click", moveTilesUp);
rightButton.addEventListener("click", moveTilesRight);
downButton.addEventListener("click", moveTilesDown);
leftButton.addEventListener("click", moveTilesLeft);
