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

const stone= "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001432.png";

const scissor= "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001900.png";

const paper= "https://raw.githubusercontent.com/cgcb-01/JAVASCRIPT_Project/refs/heads/main/Rock%2Cpaper%2CScissor%20game/images/Screenshot%202025-06-06%20001814.png";

const img={stone,paper,scissor};