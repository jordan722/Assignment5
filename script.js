// write funciton to add row to grid

let amountOfRows = 1;
let amountOfColumns = 2;

// Add row to grid
function addRow(){
  // Grab the main grid
  let mainGrid = document.getElementById("main-grid");
  // Make the row that we want to populate and append to the table on the DOM
  let newRow = document.createElement("tr")

  // Populate the row with squares or cells
  for(var i = 0; i < amountOfColumns; i++){
    let cell = document.createElement("td");

    //Add event listener to newly added cells
    cell.onclick = function () {
        var newColor = document.getElementById("colorDropdown");
        var val = newColor.options[newColor.selectedIndex].value;
        this.style.backgroundColor = val;
    }

    newRow.appendChild(cell);
  }

  mainGrid.appendChild(newRow);
  amountOfRows++;
}

// Remove row from grid
function removeRow() {
    let mainGrid = document.getElementById("main-grid");
    let elemToRemove = mainGrid.lastElementChild;

    if(elemToRemove === null) {
        alert("No More Rows To Remove!");
    } else {
        mainGrid.removeChild(elemToRemove);
    }
    amountOfRows--;
}


// Add column to grid
function addColumn(){
  let rows = document.getElementsByTagName("tr");
  console.log(rows);

  for(var i = 0; i < rows.length; i++){
    console.log('row');

    let newCol = document.createElement('td');

    //Add event listener to newly added cells
    newCol.onclick = function () {
        var newColor = document.getElementById("colorDropdown");
        var val = newColor.options[newColor.selectedIndex].value;
        this.style.backgroundColor = val;
    }

    rows[i].appendChild(newCol);
  }

  amountOfColumns++;
}

// Click on a cell and change its color to the currently selected color
let mainGrid = document.getElementById("main-grid");

if (mainGrid !== null) {

    for (let i = 0, row; row = mainGrid.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {

             row.cells[j].onclick = function () {
                var newColor = document.getElementById("colorDropdown");
                var val = newColor.options[newColor.selectedIndex].value;
                this.style.backgroundColor = val;
            }
        }  
     }
}

// Remove column from grid
function removeColumn() {

    let rows = document.getElementsByTagName("tr")
    for(var i = 0; i < rows.length; i++){
        let elemToRemove = rows[i].lastElementChild;
        rows[i].removeChild(elemToRemove);
    }

    amountOfColumns--;

}

function clearAllColors() {

    let table = document.getElementById("main-grid");

    if(table !== null){

        for (let i = 0, row; row = table.rows[i]; i++) {
            for (let j = 0, col; col = row.cells[j]; j++) {
                 row.cells[j].style.backgroundColor = "gray";
            }  
         }
    }
}

function fillAllColors() {

    let table = document.getElementById("main-grid");

    if(table !== null) {
        
        for (let i = 0, row; row = table.rows[i]; i++) {
            for (let j = 0, col; col = row.cells[j]; j++) {
                 var newColor = document.getElementById("colorDropdown");
                 var val = newColor.options[newColor.selectedIndex].value;
                 row.cells[j].style.backgroundColor = val;
            }  
         }
    }
}

function fillAllUnfilledColors() {

    let table = document.getElementById("main-grid");

    if(table !== null) {

        for (let i = 0, row; row = table.rows[i]; i++) {
            for (let j = 0, col; col = row.cells[j]; j++) {
                 var newColor = document.getElementById("colorDropdown");
                 var val = newColor.options[newColor.selectedIndex].value;
     
                 if(row.cells[j].style.backgroundColor === "" || row.cells[j].style.backgroundColor === "gray") {
                     row.cells[j].style.backgroundColor = val;
                 }
            }  
         }
    }

}
