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
    table.appendChild(row);
    for(var j = 0; j < max-1; j++) {
        var cell = document.createElement('td');
        cell = row.insertCell(j);
        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'test');
        cell.appendChild(button);
    }
    max += 2;
}
tablediv.appendChild(table);
}

//click button to select/unselect
//when one button in row is selected, disable others not in row

//if easy, show rows 1 3 5

//if medium, show easy rows and row 7

//if hard, show medium rows, hide row 1, show rows 9 11




//rows are made of buttons
//when first stone pressed, highlight stone (and row?)
//allow clicks until last stone in row is gone
//when "finalize" button is pressed..
// confirm selection of other buttons and make invisible + unselectable

