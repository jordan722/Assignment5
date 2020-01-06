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
