//wrappper for etch a sketch browser game
function sketch() {

  function drawPad() {
    
    while (sketchPad.hasChildNodes()) {
      sketchPad.removeChild(sketchPad.firstChild);
    }

    for (let i = 0; i < gridSize && i < 100; i++) {
      const row = document.createElement("div");
      
      row.classList.add("grid-row");

      for (let j =0; j < gridSize && j < 100; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        row.appendChild(cell);
      }

      sketchPad.appendChild(row);
    }
  }

  function getGridSize() {
    gridSize = prompt("Choose a grid size up to 100 columns", gridSize);

    switch (true) {
      case gridSize == null:
      case gridSize == "":
        break;
      case gridSize > 100:
      case gridSize < 1:
      case isNaN(gridSize):
        getGridSize();
        break;
      default:
        drawPad();
    }
  }


  const sketchPad = document.getElementById("sketch-pad")
  const buttonReset = document.getElementById("reset")
  const buttonGridSize = document.getElementById("grid-size")

  let gridSize = 16;

  buttonGridSize.addEventListener("click", () => getGridSize())
  buttonReset.addEventListener("click", () => drawPad())
  
  sketchPad.addEventListener("mouseover", (e) => {
    if (e.target && e.target.matches("div.grid-cell")) {
      e.target.classList.add("grid-color");
    }
  })

  drawPad();

}
sketch();