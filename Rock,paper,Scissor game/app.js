// The concept to be used here is:
// The gamefield will be displayed and the choose will be hidden initially 
// Play button on click will make choose field displayed and gamefield display=none
// on choosing any symbols store the button[i] then make the choose field none and show gamefield.
// save the i of button chosen by user.
// List of img src. random value between 1 to 3.
// choose the index of the list acc to random value .
// so user image index is i .
// load game field ->ratate the stone image twice then change the img.src to new src.
// if i=random value by computer draw.
//and as the rule is applied apply winner rules.

const stone = "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001432.png";
const scissor = "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001900.png";
const paper = "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001814.png";

const img = [stone, paper, scissor];

// DOM references
const play = document.querySelector(".play");
const gamefield = document.querySelector(".gamefield");
const choose = document.querySelector(".choose");
const userchoice = document.querySelectorAll('.imgChoice button');

play.addEventListener("click", chooseOp);

//Choosing Logic
function chooseOp() {
  gamefield.style.display = "none";
  choose.style.display = "flex";

 
  userchoice.forEach((button, index) => {
    button.replaceWith(button.cloneNode(true));
  });

  const newButtons = document.querySelectorAll('.imgChoice button');

  newButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      gameop(index); 
    });
  });
}

// Main game logic
function gameop(i) {
  // Temporary "stone" image shown for both
  const defaultImg = img[0]; // stone
  const pcImg = document.querySelector(".pc .gameimg");
  const userImg = document.querySelector(".user .gameimg");

  // Set both to stone
  pcImg.src = defaultImg;
  userImg.src = defaultImg;

  // Show gamefield immediately
  gamefield.style.display = "flex";
  choose.style.display = "none";
  play.style.display = "none";

  // After 2 seconds, show real choices
  setTimeout(() => {
    let j = Math.floor(Math.random() * 3);
    pcImg.src = img[j];
    userImg.src = img[i];

    // Optional: show result after revealing images
    
  }, 2000); // 2000ms = 2 seconds
  
}

// Rock Paper Scissor game logic
function getResult(user, pc) {
  if (user === pc) return "Draw!";
  if (
    (user === 0 && pc === 2) ||  // rock > scissor
    (user === 1 && pc === 0) ||  // paper > rock
    (user === 2 && pc === 1)     // scissor > paper
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}