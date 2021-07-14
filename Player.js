//Player Turn Sorting Variable
var player = 1;
//Player Turn Variable
var hasPlayerMoved = false;
//Game Over Variable
var gameOver = false;

//Assign Player Names
var p1Name;
document.getElementById("p1Name").innerHTML = p1Name;

var p2Name;
document.getElementById("p2Name").innerHTML = p2Name;
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