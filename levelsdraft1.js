var tablediv = document.getElementById("tablediv");
//when listener activates...
document.getElementById("makerowsbtn").addEventListener("click", createRows(), false)
function createRows() {
    console.log("testingggg");
    var table = document.createElement('table')

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    //make all rows 
var max = table.rows.length + 2;
for(var i = 0; i < 6; i++) {
    var row = document.createElement('tr');
    row.setAttribute('class', `row${i}`);
    table.appendChild(row);
    for(var j = 0; j < max-1; j++) {
        var cell = document.createElement('td');
        cell = row.insertCell(j);
        var button = document.createElement('input');
        button.addEventListener("click", disableRows(event));
        button.setAttribute('class', 'stonebtn');
        button.setAttribute('class', `stonerow${i}`);
        button.setAttribute('type', 'button');
        button.setAttribute('id', `btn${i}${j}`);
        cell.appendChild(button);
    }
    max += 2;
}
tablediv.appendChild(table);
}

function disableRows(event) {
    // //disable stones in all other rows (check stone's tr id? or make stone part of its own class)
    // var stone = event.target;
    // //stone.tagname...
    // for(i = 0, row; row=table.row[i]; i++) {
    //     if (stone
    // }
    //     //foreach row.. if (row.id != stone's row.id), foreach stone in row, disable click & make less visible

}

function setDifficulty(difficulty) {
    //if difficulty == easy
        //show rows 1 3 5
    //elif diff == medium
        //show rows easy, show row 7
    //elif diff == hard
        //show rows medium, hide row 1, show rows 9 11
}

//GOALS FOR THURSDAY:
    //center gameplay, put in game area and commit to master
    //add button for switching players/confirming selection
    // ^^ for de/selecting all stones in a row
    //get functionality for disability of buttons when pressed




//when first stone pressed, highlight stone (and row?)
//allow clicks until last stone in row is gone
//when "finalize" button is pressed..
// confirm selection of other buttons and make invisible + unselectable

