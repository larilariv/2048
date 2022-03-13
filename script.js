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
// setNewGame();
// find way to load boardGrid on page load so the board is set up to play right away
// find way to reload boardGrid on click of New Game button
//~10 lines of code 30min of work
//Possibly a for loop that run through each square, either set it's innerHTML to blank
// $("#mydiv").load(location.href + " #mydiv");
//Highest Score- look into local storage

const newGameButton = document.querySelector("#new-game-button");
newGameButton.addEventListener("click", setNewGame());
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

function moveTilesUp() {
  for (let yAxis = 0; yAxis < 4; yAxis++) {
    for (let xAxis = 0; xAxis < 4; xAxis++) {
      if (boardGrid[xAxis][yAxis].getAttribute("value") > 0) {
        if (
          boardGrid[xAxis][yAxis].getAttribute("value") ===
          boardGrid[xAxis - 1][yAxis].getAttribute("value")
        ) {
          sumOfTiles =
            boardGrid[xAxis][yAxis].getAttribute("value") +
            boardGrid[xAxis - 1][yAxis].getAttribute("value");
          boardGrid[xAxis - 1][yAxis].setAttribute("value", sumOfTiles);
          boardGrid[xAxis - 1][yAxis].innerText = sumOfTiles;
        }
        while (boardGrid[xAxis - 1][yAxis].getAttribute("value") == 0) {
          boardGrid[xAxis - 1][yAxis].setAttribute(
            "value",
            boardGrid[xAxis][yAxis].getAttribute("value")
          );
          boardGrid[xAxis - 1][yAxis].innerText =
            boardGrid[xAxis - 1][yAxis].getAttribute("value");
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          boardGrid[xAxis][yAxis].innerText = "";
          xAxis--;
          if (xAxis <= 0) break;
        }
      }
    }
  }
  genNewTile();
}

const upButton = document.querySelector("#up-button");
upButton.addEventListener("click", moveTilesUp);

function moveTilesDown() {
  for (let yAxis = 3; yAxis > -1; yAxis--) {
    for (let xAxis = 3; xAxis > -1; xAxis--) {
      if (boardGrid[xAxis][yAxis].getAttribute("value") > 0) {
        if (
          boardGrid[xAxis][yAxis].getAttribute("value") ===
          boardGrid[xAxis + 1][yAxis].getAttribute("value")
        ) {
          sumOfTiles =
            boardGrid[xAxis][yAxis].getAttribute("value") +
            boardGrid[xAxis + 1][yAxis].getAttribute("value");
          boardGrid[xAxis + 1][yAxis].setAttribute("value", sumOfTiles);
          boardGrid[xAxis + 1][yAxis].innerText = sumOfTiles;
        }
        while (boardGrid[xAxis + 1][yAxis].getAttribute("value") == 0) {
          boardGrid[xAxis + 1][yAxis].setAttribute(
            "value",
            boardGrid[xAxis][yAxis].getAttribute("value")
          );
          boardGrid[xAxis + 1][yAxis].innerText =
            boardGrid[xAxis + 1][yAxis].getAttribute("value");
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          boardGrid[xAxis][yAxis].innerText = "";
          xAxis++;
          if (xAxis >= 3) break;
        }
      }
    }
  }
  genNewTile();
}
const downButton = document.querySelector("#down-button");
downButton.addEventListener("click", moveTilesDown);

function moveTilesRight() {
  for (let xAxis = 3; xAxis > -1; xAxis--) {
    for (let yAxis = 3; yAxis > -1; yAxis--) {
      if (boardGrid[xAxis][yAxis].getAttribute("value") > 0) {
        if (
          boardGrid[xAxis][yAxis].getAttribute("value") ===
          boardGrid[xAxis][yAxis + 1].getAttribute("value")
        ) {
          sumOfTiles =
            boardGrid[xAxis][yAxis].getAttribute("value") +
            boardGrid[xAxis][yAxis + 1].getAttribute("value");
          boardGrid[xAxis][yAxis + 1].setAttribute("value", sumOfTiles);
          boardGrid[xAxis][yAxis + 1].innerText = sumOfTiles;
        }
        while (boardGrid[xAxis][yAxis + 1].getAttribute("value") == 0) {
          boardGrid[xAxis][yAxis + 1].setAttribute(
            "value",
            boardGrid[xAxis][yAxis].getAttribute("value")
          );
          boardGrid[xAxis][yAxis + 1].innerText =
            boardGrid[xAxis][yAxis + 1].getAttribute("value");
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          boardGrid[xAxis][yAxis].innerText = "";
          yAxis++;
          if (yAxis >= 3) break;
        }
      }
    }
  }
  genNewTile();
}

const rightButton = document.querySelector("#right-button");
rightButton.addEventListener("click", moveTilesRight);

function moveTilesLeft() {
  for (let xAxis = 0; xAxis < 4; xAxis++) {
    for (let yAxis = 0; yAxis < 4; yAxis++) {
      if (boardGrid[xAxis][yAxis].getAttribute("value") > 0) {
        if (
          boardGrid[xAxis][yAxis].getAttribute("value") ===
          boardGrid[xAxis][yAxis - 1].getAttribute("value")
        ) {
          sumOfTiles =
            boardGrid[xAxis][yAxis].getAttribute("value") +
            boardGrid[xAxis][yAxis - 1].getAttribute("value");
          boardGrid[xAxis][yAxis - 1].setAttribute("value", sumOfTiles);
          boardGrid[xAxis][yAxis - 1].innerText = sumOfTiles;
        }
        while (boardGrid[xAxis][yAxis - 1].getAttribute("value") == 0) {
          boardGrid[xAxis][yAxis - 1].setAttribute(
            "value",
            boardGrid[xAxis][yAxis].getAttribute("value")
          );
          boardGrid[xAxis][yAxis - 1].innerText =
            boardGrid[xAxis][yAxis - 1].getAttribute("value");
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          boardGrid[xAxis][yAxis].innerText = "";
          yAxis--;
          if (yAxis <= 0) break;
        }
      }
    }
  }
  genNewTile();
}

const leftButton = document.querySelector("#left-button");
leftButton.addEventListener("click", moveTilesLeft);
