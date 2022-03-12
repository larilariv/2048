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
  //   genNewTile();
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

//tiles doing up/down in the same column will have the same yAxis number
//tiles going left/right in the same row will have the same xAxis number

const upButton = document.querySelector("#up-button");
upButton.addEventListener("click", moveTilesUp);

function moveTilesUp() {
  // console.log("Up Button Clicked");
  //To Move a Tile Up
  //Pull the information of all the tiles with a value greater than 0
  //If the tiles are moving up, their xAxis will decrease
  //min xAxis = 0, max xAxis = 3, yAxis stays the same
  for (let xAxis = 0; xAxis < 4; xAxis++) {
    for (let yAxis = 0; yAxis < 4; yAxis++) {
      //   console.log(boardGrid[xAxis][yAxis]);
      //   console.log(boardGrid[xAxis][yAxis].getAttribute("value"));
      if (boardGrid[xAxis][yAxis].getAttribute("value") > 0) {
        //If a tile has a value greater than 0
        console.log(boardGrid[xAxis][yAxis]);
        console.log(boardGrid[xAxis][yAxis].getAttribute("value"));
        //Logs the tile with a value greater than 0
        console.log(boardGrid[xAxis - 1][yAxis].getAttribute("value"));
        //Logs the value of the next tile up
        while (boardGrid[xAxis - 1][yAxis].getAttribute("value") == 0) {
          //If the next tile up has a value of 0
          boardGrid[xAxis - 1][yAxis].setAttribute(
            "value",
            boardGrid[xAxis][yAxis].getAttribute("value")
          );
          boardGrid[xAxis - 1][yAxis].innerText =
            boardGrid[xAxis - 1][yAxis].getAttribute("value");
          //The next tile up has it's value set to the same value as the tile with a value greater than 0
          boardGrid[xAxis][yAxis].setAttribute("value", 0);
          boardGrid[xAxis][yAxis].innerText = "";
          //The original tile with a value over 0 get's it's value changed to 0
        }
      } //     else if (
      //     boardGrid[xAxis][yAxis].getAttribute("value") ===
      //     boardGrid[xAxis - 1][yAxis].getAttribute("value")
      //   ) {
      //     //If the value of the tile with a value greater than 0 is equal to the new tile up
      //     sumOfTiles =
      //       boardGrid[xAxis][yAxis].getAttribute("value") +
      //       boardGrid[xAxis - 1][yAxis].getAttribute("value");
      //     //The sum of both tile values will be assigned to the variable sumOfTiles
      //     boardGrid[xAxis - 1][yAxis].setAttribute("value", sumOfTiles);
      //     boardGrid[xAxis - 1][yAxis].innerText = sumOfTiles;
      //     //The next tile up will be given the vaule and innerText of the sumOfTiles
      //   }
      // }
    }
  }
  genNewTile();
}
// moveTilesUp();
