let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

let turno = true; // true => O's turn, false => X's turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Function to disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
};

// Function to enable all boxes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
  });
};

// Function to show the winner
const showWinner = (winner) => {
  msg.innerText = `${winner} Wins!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Function to check the winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return;
    }
  }
};

// Add click event to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.style.pointerEvents = "none";
    checkWinner();
  });
});

// Reset and New Game button functionality
const resetGame = () => {
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
