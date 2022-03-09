//console.log("hello world");
//select 2 random tiles and give them a value of "2"
//const allTiles = document.querySelector(".board-tile");

// const upButton = document.querySelector("#up-button");
// const rightButton = document.querySelector("#right-button");
// const downButton = document.querySelector("#down-button");
// const leftButton = document.querySelector("#left-button");

// upButton.addEventListener("click", moveTilesUp);
// rightButton.addEventListener("click", moveTilesRight);
// downButton.addEventListener("click", moveTilesDown);
// leftButton.addEventListener("click", moveTilesLeft);

const gameBoard = document.querySelector(".game-board");

const totalTiles = 16;

// function getRandomNum(max) {
//   let randomNum = Math.floor(Math.random() * max);
//   console.log(randomNum);
// }
// getRandomNum(totalTiles);

// function placeTile() {
//   for (i = 1; i <= totalTiles; i++) {
//     // let tileValue = boardTile.value;
//     // console.log(tileValue);
//     console.log(i);
//     // if (boardTile[i].value === 0) {
//     //     console.log(boardTile[i].id);
//     // }
//   }
// }
//console.log(placeTile());

function createGrid() {
  for (let i = 1; i <= totalTiles; i++) {
    let boardTiles = document.createElement("div");
    boardTiles.classList.add("board-tile");
    boardTiles.setAttribute("value", 0);
    gameBoard.appendChild(boardTiles);
  }
}
createGrid();
