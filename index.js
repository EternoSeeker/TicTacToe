// document.querySelector("body").classList.add("red-background");
// just a comment
const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let currentTurn = "X";
let gameOver = false;

let xwon = 0;
let owon = 0;
let tie = 0;

const changeTurn = () => {
  currentTurn = currentTurn === "X" ? "O" : "X";
  let turnDisplay = document.querySelector(".turn-display");
  turnDisplay.innerText = currentTurn;
};

const checkWin = () => {
  let boxSymbol = document.getElementsByClassName("box-symbol");
  wins.forEach((combination) => {
    if (
      boxSymbol[combination[0]].innerText ===
        boxSymbol[combination[1]].innerText &&
      boxSymbol[combination[1]].innerText ===
        boxSymbol[combination[2]].innerText &&
      boxSymbol[combination[0]].innerText !== ""
    ) {
      gameOver = true;
      if (boxSymbol[combination[0]].innerText === "X") {
        xwon++;
      } else if (boxSymbol[combination[0]].innerText === "O") {
        owon++;
      }

      let xScore = document.querySelector(".x-won");
      xScore.innerText = xwon;
      let oScore = document.querySelector(".o-won");
      oScore.innerText = owon;
    }
  });
};

var boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxSymbol = element.querySelector(".box-symbol");
  element.addEventListener("click", () => {
    if (boxSymbol.innerText === "" && gameOver === false) {
      boxSymbol.innerText = currentTurn;

      changeTurn();

      checkWin();
    }
  });
});
//Array.from(boxes).forEach((ele) => {
//  ele.addEventListener("click", (e) => {
//    alert(e.target.getAttribute("id"));
//  });
//});
