const gameBoard = document.querySelector(".game-board");

const boardTiles = document.querySelectorAll(".board-tile");

const totalTiles = boardTiles.length;

function getRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

let availTiles = [];
let tileValue;

function setStartGrid() {
  for (let i = 0; i < totalTiles; i++) {
    tileValue = boardTiles[i].getAttribute("value");
    tileById = document.getElementById(`${i}`);

    if (tileValue == 0) {
      availTiles.push(tileById);
    }
  }
  startTile1 = document.getElementById(`${getRandomNum(totalTiles)}`);
  availTiles.splice([startTile1.id], 1);
  startTile1.setAttribute("value", 2);
  startTile1.innerHTML = "2";

  startTile2 = document.getElementById(`${getRandomNum(availTiles.length)}`);
  availTiles.splice([startTile2.id], 1);
  startTile2.setAttribute("value", 2);
  startTile2.innerHTML = "2";
  console.log(availTiles);
}
setStartGrid();
