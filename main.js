//wrappper for etch a sketch browser game
function sketch() {

  function drawPad() {
    while (sketchpad.hasChildNodes()) {
      sketchpad.removeChild(sketchpad.firstChild);
    }

    for (let i = 0; i < gridSize && i < 100; i++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      sketchpad.appendChild(div);
    }
  }

  function getGridSize() {
    gridSize = prompt("Choose a grid size up to 100");

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

  const sketchpad = document.getElementById("sketch-pad")
  const buttonReset = document.getElementById("reset")
  const buttonGridSize = document.getElementById("grid-size")

  let gridSize = 16;

  buttonGridSize.addEventListener("click", () => getGridSize())
  buttonReset.addEventListener("click", () => reset())















  drawPad();
}
sketch();