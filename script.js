let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let newgamebtn = document.querySelector(".newgame");
let msgcontain = document.querySelector(".msg-container");
var turnO = true;
let count = 0;
let possibleset = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    count = count + 1;
    if (count === 9) {
      msg.innerText = "Game is Draw. Try Again";
      msgcontain.classList.remove("hide");
    }
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of possibleset) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        disablebtn();
      }
    }
  }
};
const enablebtn = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};
const disablebtn = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const showWinner = (winner) => {
  msg.innerText = `Congratulation!! Winner is ${winner}`;
  msgcontain.classList.remove("hide");
};
const resetbt = () => {
  enablebtn();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  msg.innerText = "";
};
const newgamebt = () => {
  enablebtn();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  msg.innerText = "";
  msgcontain.classList.add("hide");
};

resetbtn.addEventListener("click", resetbt);
newgamebtn.addEventListener("click", newgamebt);
