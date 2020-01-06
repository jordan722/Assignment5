// write funciton to add row to grid

let amountOfRows = 1;
let amountOfColumns = 2;

function addRow(){
  // Grab the main grid
  let mainGrid = document.getElementById("main-grid");
  // Make the row that we want to populate and append to the table on the DOM
  let newRow = document.createElement("tr")

  // Populate the row with squares or cells
  for(var i = 0; i < amountOfColumns; i++){
    let cell = document.createElement("td");
    newRow.appendChild(cell);
  }

  mainGrid.appendChild(newRow);
  amountOfRows++;
}

function removeRow() {
    let mainGrid = document.getElementById("main-grid");
    let elemToRemove = mainGrid.lastElementChild;

    if(elemToRemove === null) {
        alert("No More Rows To Remove!");
    } else {
        mainGrid.removeChild(elemToRemove);
    }
}

function addColumn(){
  let rows = document.getElementsByTagName("tr");
  console.log(rows);

  for(var i = 0; i < rows.length; i++){
    console.log('row');
    rows[i].appendChild(document.createElement('td'));
  }

  amountOfColumns++;
}

let mainGrid = document.getElementById("main-grid");

if (mainGrid != null) {
    for (var i = 0; i < mainGrid.rows.length; i++) {
        for (var j = 0; j < mainGrid.rows[i].cells.length; j++)
        mainGrid.rows[i].cells[j].onclick = function () {
            tableText(this);
        };
    }
}

function tableText(tableCell) {
    alert("Hi");
}
