//Player Turn Sorting Variable
var player = 1;
//Player Turn Variable
var hasPlayerMoved = false;
//Game Over Variable
var gameOver = false;
//Form Variable
const form = document.getElementById('form');

//Event Listeners
form.addEventListener('submit', submitNames);


//Assign Player Names
function submitNames(){
    event.preventDefault();
    
    var p1Name = document.getElementById('p1Name').value;
    if(p1Name === ""){
        var p1Name = "Player 1"
    }
    console.log(p1Name);

    var p2Name = document.getElementById('p2Name').value;
    if(p2Name === ""){
        var p2Name = "Player 2"
    }
    console.log(p2Name);
//Start Game Function Would go here
    document.getElementById("turnBox").innerHTML = `${p1Name}'s Turn`;
}

//End Turn Button Function

//Clear Turn Button Function

//Who's Turn it is box


var StartGame = function(){
    player = 1;
    gameOver = false;
    hasPlayerMoved = false;

}

var switchPlayer = function(){
    if(!gameOver) {
        if(player === 1){
            player = 2;
        } 
    }
}