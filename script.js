// write funciton to add row to grid

let amountOfRows = 1;
let amountOfColumns = 1;
let draw = false;


// Triggers to allow for hold and click color change
function addTriggers(cell){
  cell.onmouseover = function(){
    if(draw){
      var newColor = document.getElementById("colorDropdown");
      var val = newColor.options[newColor.selectedIndex].value;
      this.style.backgroundColor = val;
    }
  }
  cell.onmousedown = function () {
      var newColor = document.getElementById("colorDropdown");
      var val = newColor.options[newColor.selectedIndex].value;
      this.style.backgroundColor = val;
      draw = true;
  }
  cell.onmouseup = function() {
    draw = false;
  }
}

// Add row to grid
function addRow(){
  // Grab the main grid
  let mainGrid = document.getElementById("main-grid");
  // Make the row that we want to populate and append to the table on the DOM
  let newRow = document.createElement("tr")

  // Populate the row with squares or cells
  for(var i = 0; i < amountOfColumns; i++){
    let cell = document.createElement("td");
    addTriggers(cell);

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
    addTriggers(newCol);

    newCol.onclick = function () {
        var newColor = document.getElementById("colorDropdown");
        var val = newColor.options[newColor.selectedIndex].value;
        this.style.backgroundColor = val;
    }

    rows[i].appendChild(newCol);
  }

  amountOfColumns++;
}

let mainGrid = document.getElementById("main-grid");

if (mainGrid != null) {
    for (var i = 0; i < mainGrid.rows.length; i++) {
        for (var j = 0; j < mainGrid.rows[i].cells.length; j++)
            mainGrid.rows[i].cells[j].onclick = function () {

                var newColor = document.getElementById("colorDropdown");
                var val = newColor.options[newColor.selectedIndex].value;
                this.style.backgroundColor = val;
        };
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
