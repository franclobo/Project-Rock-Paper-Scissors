const counter = document.getElementById("counter");
const display = document.getElementById("display");
const rock = document.getElementById("rock");
const scisors = document.getElementById("scisors");
const paper = document.getElementById("paper");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const round = document.getElementById("round");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let computerScoreCounter = 0;
let playerScoreCounter = 0;
let roundCounter = 0;

const computerSelection = ["rock", "scisors", "paper"];

const item = [
  { id: "rock", value: rock },
  { id: "scisors", value: scisors },
  { id: "paper", value: paper }
];


const disableButtons = () => {
  item.forEach(item => {
    item.value.disabled = true;
  });
};

const enableButtons = () => {
  item.forEach(item => {
    item.value.disabled = false;
  });
};

const computerPlay = () => {
  return computerSelection[Math.floor(Math.random() * computerSelection.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scisors") ||
    (playerSelection === "scisors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
};

const hideButton = () => {
  reset.style.display = "none";
};

const showButton = () => {
  reset.style.display = "flex";
};

const game = () => {
  hideButton();
  item.forEach(item => {
    item.value.addEventListener("click", () => {
      const playerSelection = item.id;
      const computerSelection = computerPlay();
      const resultRound = playRound(playerSelection, computerSelection);
      roundCounter++;
      round.textContent = `Round: ${roundCounter}`;
      if (resultRound === "You Win") {
        playerScoreCounter++;
      } else if (resultRound === "You Lose") {
        computerScoreCounter++;
      }
      playerScore.textContent = `Player Score: ${playerScoreCounter}`;
      computerScore.textContent = `Computer Score: ${computerScoreCounter}`;
      display.innerHTML = `<img src="./asets/images/${computerSelection}.png" alt="${computerSelection}" class="select"/>`;
      counter.innerHTML = `<img src="./asets/images/${playerSelection}.png" alt="${playerSelection}" class="select" />`;
      result.textContent = `${playerScoreCounter} - ${computerScoreCounter}`;
      if (roundCounter === 5) {
        showButton();
        disableButtons();
        if (playerScoreCounter > computerScoreCounter) {
          result.textContent = `You Win!`;
        } else if (playerScoreCounter < computerScoreCounter) {
          result.textContent = `You Lose!`;
        } else {
          result.textContent = `It's a Tie!`;
        }
      }
    });
  });

  reset.addEventListener("click", () => {
    roundCounter = 0;
    playerScoreCounter = 0;
    computerScoreCounter = 0;
    round.textContent = `Round: ${roundCounter}`;
    playerScore.textContent = `Player Score: ${playerScoreCounter}`;
    computerScore.textContent = `Computer Score: ${computerScoreCounter}`;
    result.textContent = `${playerScoreCounter} - ${computerScoreCounter}`;
    enableButtons();
  });

};

game();
