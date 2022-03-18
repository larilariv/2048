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

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

function calculateScore() {
  currentScoreCounter = 0;
  for (let xAxis = 0; xAxis <= 3; xAxis++) {
    for (let yAxis = 0; yAxis <= 3; yAxis++) {
      tileValue = parseInt(boardGrid[xAxis][yAxis].getAttribute("value"));
      currentScoreCounter += tileValue;
      document.querySelector("#current-score-counter").innerHTML =
        currentScoreCounter;
    }
  }
}

function genNewTile() {
  let randomRow = getRandomNum(boardGrid.length);
  let randomColumn = getRandomNum(boardGrid[0].length);
  randomTile = boardGrid[randomRow][randomColumn];
  if (randomTile.getAttribute("value") == 0) {
    randomTile.setAttribute("value", 2);
  } else {
    genNewTile();
  }
  calculateScore();
}

function moveTilesUp() {
  for (let yAxis = 0; yAxis <= 3; yAxis++) {
    for (let xAxis = 1; xAxis <= 3; xAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        let tempXAxis = xAxis;
        while (
          parseInt(boardGrid[tempXAxis - 1][yAxis].getAttribute("value")) == 0
        ) {
          boardGrid[tempXAxis - 1][yAxis].setAttribute(
            "value",
            parseInt(boardGrid[tempXAxis][yAxis].getAttribute("value"))
          );
          boardGrid[tempXAxis][yAxis].setAttribute("value", 0);
          tempXAxis--;
          if (tempXAxis == 0) break;
        }
      }
    }
    for (let xAxis = 0; xAxis <= 2; xAxis++) {
      if (
        parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) ===
        parseInt(boardGrid[xAxis + 1][yAxis].getAttribute("value"))
      ) {
        sumOfTiles =
          parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) +
          parseInt(boardGrid[xAxis + 1][yAxis].getAttribute("value"));
        boardGrid[xAxis][yAxis].setAttribute("value", sumOfTiles);
        boardGrid[xAxis + 1][yAxis].setAttribute("value", 0);
      }
    }
    for (let xAxis = 1; xAxis <= 3; xAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        let tempXAxis = xAxis;
        while (
          parseInt(boardGrid[tempXAxis - 1][yAxis].getAttribute("value")) == 0
        ) {
          boardGrid[tempXAxis - 1][yAxis].setAttribute(
            "value",
            parseInt(boardGrid[tempXAxis][yAxis].getAttribute("value"))
          );
          boardGrid[tempXAxis][yAxis].setAttribute("value", 0);
          tempXAxis--;
          if (tempXAxis == 0) break;
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
        let tempYAxis = yAxis;
        while (
          parseInt(boardGrid[xAxis][tempYAxis - 1].getAttribute("value")) == 0
        ) {
          boardGrid[xAxis][tempYAxis - 1].setAttribute(
            "value",
            parseInt(boardGrid[xAxis][tempYAxis].getAttribute("value"))
          );
          boardGrid[xAxis][tempYAxis].setAttribute("value", 0);
          tempYAxis--;
          if (tempYAxis == 0) break;
        }
      }
    }
    for (let yAxis = 0; yAxis <= 2; yAxis++) {
      if (
        parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) ===
        parseInt(boardGrid[xAxis][yAxis + 1].getAttribute("value"))
      ) {
        sumOfTiles =
          parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) +
          parseInt(boardGrid[xAxis][yAxis + 1].getAttribute("value"));
        boardGrid[xAxis][yAxis].setAttribute("value", sumOfTiles);
        boardGrid[xAxis][yAxis + 1].setAttribute("value", 0);
      }
    }
    for (let yAxis = 1; yAxis <= 3; yAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        let tempYAxis = yAxis;
        while (
          parseInt(boardGrid[xAxis][tempYAxis - 1].getAttribute("value")) == 0
        ) {
          boardGrid[xAxis][tempYAxis - 1].setAttribute(
            "value",
            parseInt(boardGrid[xAxis][tempYAxis].getAttribute("value"))
          );
          boardGrid[xAxis][tempYAxis].setAttribute("value", 0);
          tempYAxis--;
          if (tempYAxis == 0) break;
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
        let tempXAxis = xAxis;
        while (
          parseInt(boardGrid[tempXAxis + 1][yAxis].getAttribute("value")) == 0
        ) {
          boardGrid[tempXAxis + 1][yAxis].setAttribute(
            "value",
            parseInt(boardGrid[tempXAxis][yAxis].getAttribute("value"))
          );
          boardGrid[tempXAxis][yAxis].setAttribute("value", 0);
          tempXAxis++;
          if (tempXAxis == 3) break;
        }
      }
    }
    for (let xAxis = 3; xAxis >= 1; xAxis--) {
      if (
        parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) ===
        parseInt(boardGrid[xAxis - 1][yAxis].getAttribute("value"))
      ) {
        sumOfTiles =
          parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) +
          parseInt(boardGrid[xAxis - 1][yAxis].getAttribute("value"));
        boardGrid[xAxis][yAxis].setAttribute("value", sumOfTiles);
        boardGrid[xAxis - 1][yAxis].setAttribute("value", 0);
      }
    }
    for (let xAxis = 2; xAxis >= 0; xAxis--) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        let tempXAxis = xAxis;
        while (
          parseInt(boardGrid[tempXAxis + 1][yAxis].getAttribute("value")) == 0
        ) {
          boardGrid[tempXAxis + 1][yAxis].setAttribute(
            "value",
            parseInt(boardGrid[tempXAxis][yAxis].getAttribute("value"))
          );
          boardGrid[tempXAxis][yAxis].setAttribute("value", 0);
          tempXAxis++;
          if (tempXAxis == 3) break;
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
        let tempYAxis = yAxis;
        while (
          parseInt(boardGrid[xAxis][tempYAxis + 1].getAttribute("value")) == 0
        ) {
          boardGrid[xAxis][tempYAxis + 1].setAttribute(
            "value",
            parseInt(boardGrid[xAxis][tempYAxis].getAttribute("value"))
          );
          boardGrid[xAxis][tempYAxis].setAttribute("value", 0);
          tempYAxis++;
          if (tempYAxis == 3) break;
        }
      }
    }
    for (let yAxis = 3; yAxis >= 1; yAxis--) {
      if (
        parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) ===
        parseInt(boardGrid[xAxis][yAxis - 1].getAttribute("value"))
      ) {
        sumOfTiles =
          parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) +
          parseInt(boardGrid[xAxis][yAxis - 1].getAttribute("value"));
        boardGrid[xAxis][yAxis].setAttribute("value", sumOfTiles);
        boardGrid[xAxis][yAxis - 1].setAttribute("value", 0);
      }
    }
    for (let yAxis = 2; yAxis >= 0; yAxis--) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        let tempYAxis = yAxis;
        while (
          parseInt(boardGrid[xAxis][tempYAxis + 1].getAttribute("value")) == 0
        ) {
          boardGrid[xAxis][tempYAxis + 1].setAttribute(
            "value",
            parseInt(boardGrid[xAxis][tempYAxis].getAttribute("value"))
          );
          boardGrid[xAxis][tempYAxis].setAttribute("value", 0);
          tempYAxis++;
          if (tempYAxis == 3) break;
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

let instructions = document.getElementById("instruction-text");
let instructionsImage = document.getElementById("show-instructions-img");

function showInstructions() {
  // let instructions = document.getElementById("instruction-text");
  // let instructionsImage = document.getElementById("show-instructions-img");
  if (instructions.style.display == "none") {
    instructions.style.display = "block";
    instructionsImage.src = "/Images/InstructionsToggle1A.svg";
  } else {
    instructions.style.display = "none";
    instructionsImage.src = "/Images/InstructionsToggle1B.svg";
  }
}

const showInstructionsButton = document.getElementById("show-instructions");
showInstructionsButton.addEventListener("click", showInstructions);
