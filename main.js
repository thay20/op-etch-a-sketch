//wrappper for etch a sketch browser game
function sketch() {

  function drawPad() {
    let squares = gridSize*gridSize;
    
    while (sketchPad.hasChildNodes()) {
      sketchPad.removeChild(sketchPad.firstChild);
    }

    for (let i = 0; i < squares && i < 10000; i++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      sketchPad.appendChild(div);
    }
  }

  function getGridSize() {
    gridSize = prompt("Choose a grid size up to 100 columns");

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

  function reset() {
    gridSize = 16;
    drawPad();
  }

  const sketchPad = document.getElementById("sketch-pad")
  const buttonReset = document.getElementById("reset")
  const buttonGridSize = document.getElementById("grid-size")

  let gridSize = 16;

  buttonGridSize.addEventListener("click", () => getGridSize())
  buttonReset.addEventListener("click", () => reset())















  drawPad();
}
sketch();