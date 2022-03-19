const winModal = document.getElementById("win-scenario-modal");
const keepPlayingButton = document.getElementById("keep-playing");
const loseModal = document.getElementById("lose-scenario-modal");
const tryAgainButton = document.getElementById("try-again");

const openWinModal = () => {
  winModal.style.display = "block";
};

function keepPlaying() {
  winModal.style.display = "none";
}

const openLoseModal = () => {
  loseModal.style.display = "block";
};

function tryAgain() {
  loseModal.style.display = "none";
}

keepPlayingButton.addEventListener("click", keepPlaying);
tryAgainButton.addEventListener("click", tryAgain);

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
}
setNewGame();

const newGameButton = document.querySelector("#new-game-button");

newGameButton.addEventListener("click", resetBoard);

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

function calculateScore() {
  let occupiedTiles = [];
  currentScoreCounter = 0;
  for (let xAxis = 0; xAxis <= 3; xAxis++) {
    for (let yAxis = 0; yAxis <= 3; yAxis++) {
      if (parseInt(boardGrid[xAxis][yAxis].getAttribute("value")) > 0) {
        tileValue = parseInt(boardGrid[xAxis][yAxis].getAttribute("value"));
        if (tileValue == 2048) {
          winModal.style.display = "block";
        }
        currentScoreCounter += tileValue;
        document.querySelector("#current-score-counter").innerHTML =
          currentScoreCounter;
        occupiedTiles.push(tileValue);
      }
    }
  }
  if (occupiedTiles.length === 16) {
    loseModal.style.display = "block";
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
    function removeSpacesUp() {
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
    removeSpacesUp();
  }
  genNewTile();
}

function moveTilesLeft() {
  for (let xAxis = 0; xAxis <= 3; xAxis++) {
    function removeSpacesLeft() {
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
    removeSpacesLeft();
  }
  genNewTile();
}

function moveTilesDown() {
  for (let yAxis = 3; yAxis >= 0; yAxis--) {
    function removeSpacesDown() {
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
    removeSpacesDown();
  }
  genNewTile();
}

function moveTilesRight() {
  for (let xAxis = 3; xAxis >= 0; xAxis--) {
    function removeSpacesRight() {
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
    removeSpacesRight();
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

function resetBoard() {
  gameBoard.innerHTML = "";
  setNewGame();
  calculateScore();
}
