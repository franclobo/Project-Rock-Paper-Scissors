const counter = document.getElementById("counter");
const display = document.getElementById("display");
const rock = document.getElementById("rock");
const scisors = document.getElementById("scisors");
const paper = document.getElementById("paper");
const getRandom = (min, max) => {
  return Math.floor((Math.random()*(max - min + 1)) + min)
};
let compupter = (comp) => {
  switch(comp){
    case 1:
      counter.innerHTML = `
      <div class="computer">
      <img src="./asets/images/paper.png">
      </div>
      `;
      compupter_score = 1;
      break;
    case 2:
      counter.innerHTML = `
      <div class="computer">
      <img src="./asets/images/scisors.png">
      </div>
      `;
      computer_score = 2;
      break;
    case 3:
      counter.innerHTML = `
      <div class="computer">
      <img src="./asets/images/rock.png">
      </div>
      `;
      compupter_score = 3;
      break;
  };
};

const player = (button = ["paper", "scisors", "rock"]) => {
  switch (button) {
    case "paper":
      display.innerHTML = `<img src="./asets/images/paper.png">`;
      player_score = 1;
      break;
    case "scisors":
      display.innerHTML = `<img src="./asets/images/scisors.png">`;
      player_score = 2;
      break;
    case "rock":
      display.innerHTML = `<img src="./asets/images/rock.png">`;
      player_score = 3;
      break;
  };
};

rock.onclick = () => {
  let count = 0;
  let score_player = 0;
  let score_computer = 0;
  compupter(comp = getRandom(1, 3));
  player("rock");
  if(compupter_score==1 && player_score==3){
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 1;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 2 && player_score == 3){
    let count = 0;
    score_computer = score_computer + count + 1;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 3 && player_score == 3){
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  }
};

scisors.onclick = () => {
  let count = 0;
  let score_player = 0;
  let score_computer = 0;
  compupter(comp = getRandom(1, 3));
  player("scisors");
  if (compupter_score == 1 && player_score == 2) {
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 1;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 2 && player_score == 2) {
    let count = 0;
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 3 && player_score == 2) {
    score_computer = score_computer + count + 1;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  }
};

paper.onclick = () => {
  let count = 0;
  let score_player = 0;
  let score_computer = 0;
  compupter(comp = getRandom(1, 3));
  player("paper");
  if (compupter_score == 1 && player_score == 1) {
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 2 && player_score == 1) {
    let count = 0;
    score_computer = score_computer + count + 1;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  } else if (compupter_score == 3 && player_score == 1) {
    score_computer = score_computer + count + 0;
    score_player = score_player + count + 0;
    counter.append(`Computer: ${score_computer}`);
    display.append(`Player: ${score_player}`);
  }
};
