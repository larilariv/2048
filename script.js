//console.log("hello world");
//select 2 random tiles and give them a value of "2"
//const allTiles = document.querySelector(".board-tile");

const upButton = document.querySelector("#up-button");
// const rightButton = document.querySelector("#right-button");
// const downButton = document.querySelector("#down-button");
// const leftButton = document.querySelector("#left-button");

upButton.addEventListener("click", moveTilesUp);
// rightButton.addEventListener("click", moveTilesRight);
// downButton.addEventListener("click", moveTilesDown);
// leftButton.addEventListener("click", moveTilesLeft);

const totalTiles = 16;

function getRandomTile(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomTile(totalTiles));
