//console.log("hello world");
//select 2 random tiles and give them a value of "2"
//const allTiles = document.querySelector(".board-tile");

const gameBoard = document.querySelector(".game-board");
const newGameButton = document.querySelector("#new-game-button");

const totalTiles = 16;

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
getRandomNum(totalTiles);

function setStartGrid() {
  const boardTile = document.getElementsByClassName("board-tile");
  console.log(boardTile);
  for (let i = 1; i <= totalTiles; i++) {
    //iterates through all tiles
    // let tileValue = boardTile.getAttribute("value");
    //all tiles start with a value of 0
    //console.log(`this is the tileValue: ${tileValue}`);
    // console.log(`This tile should get a value of 2: ${randomNum}`);
    // startTile1 = document.getElementById(`tile-${getRandomNum(totalTiles)}`);
    // console.log(`The first tile is tile-${randomNum}`);
    // startTile1.setAttribute("value", 2);
    // startTile1.innerHTML = "2";
    //assigns a random tile the value of 2, this is the first tile on the board
    //now startTile1 must be removed as an option
    // if (tileValue == 0) {
    //   console.log(`This tile should get a value of 2: ${randomNum}`);
    //   startTile2 = document.getElementById(`tile-${randomNum}`);
    //   startTile2.setAttribute("value", 2);
    //   startTile2.innerHTML = "2";
    // }
  }
}
setStartGrid();

newGameButton.addEventListener("click", setStartGrid());
