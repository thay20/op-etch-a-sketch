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

  function changeRGBA(e) {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let slice = Array.from(e.style.backgroundColor).slice(-2,-1);
    let alpha;

    if ((e.style.backgroundColor.match(/,/g) || []).length == 2 || slice == 9) {
      alpha = "1.0";
    } else if ((e.style.backgroundColor.match(/,/g) || []).length == 3){
      slice++; 
      alpha = `0.${slice}`;
    } else {
      alpha = "0.1";
    }

    e.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    console.log(e.style.backgroundColor);
  }


  const sketchPad = document.getElementById("sketch-pad")
  const buttonReset = document.getElementById("reset")
  const buttonGridSize = document.getElementById("grid-size")
  let gridSize = 16;

  buttonGridSize.addEventListener("click", () => getGridSize())
  buttonReset.addEventListener("click", () => drawPad())
  
  sketchPad.addEventListener("mouseover", (e) => {
    if (e.target && e.target.matches("div.grid-cell")) {
      changeRGBA(e.target);
    }
  })

  drawPad();

}
sketch();