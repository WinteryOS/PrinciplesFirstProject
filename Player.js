//Player Turn Sorting Variable
var player = 1;
//Player Turn Variable
var hasPlayerMoved = false;
//Game Over Variable
var gameOver = false;
//Form Variable
const form = document.getElementById('form');
//Game Difficulty Variable
var gameDifficulty;

var turnBoxText = document.getElementById("turnBox");

//Event Listeners
form.addEventListener('submit', submitNames);


//Assign Player Names
function submitNames(p1Name, p2Name){
    event.preventDefault();
    
    var p1Name = document.getElementById('p1Name').value;
    if(p1Name === ""){
        p1Name = "Player 1"
    }
    console.log(p1Name);

    var p2Name = document.getElementById('p2Name').value;
    if(p2Name === ""){
        p2Name = "Player 2"
    }
    console.log(p2Name);

    StartGame(p1Name,p2Name);

   
}

//End Turn Button Function

//Clear Turn Button Function

//Who's Turn it is box


function StartGame(p1Name,p2Name){
    turnBoxText.innerText = p1Name + "'s Turn";

    switch(gameDifficulty) {
        case 'Easy':
            EasyMode();
          break;
        case 'Medium':
            MediumMode();
          break;
        case 'Hard':
            HardMode();
            break;
        default:
          console.log("Default Error");
      }

}
//Easy Mode
function EasyMode(){
    console.log(gameDifficulty);
}
//Medium Mode
function MediumMode(){
    console.log(gameDifficulty);
}
//Hard Mode
function HardMode(){
    console.log(gameDifficulty);
}

function SwitchPlayer(p1Name,p2Name){
    if(!gameOver) {
        if(player === 1){
            player = 2;
            turnBoxText.innerText = p2Name + "'s Turn";
            
        } else {
            player = 1;
            turnBoxText.innerText = p1Name + "'s Turn";
        }
    }
    console.log(player);
}
//Functions by Kia
function openForm() {
    form.style.display = "block";
  }
  
  function closeForm() {
    form.style.display = "none";
    //Miranda
    gameDifficulty = document.getElementById("gameDifficulty").value;
    
  }