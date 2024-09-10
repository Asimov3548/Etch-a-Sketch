function makeGrid(numberOfSquares, classToAdd, parentToAppend) {
    for (i = 0; i < numberOfSquares*numberOfSquares; i++) {
        const parent = document.querySelector(parentToAppend);

        let widthOfParent = parent.offsetWidth; 

        let widthOfDiv = (widthOfParent - 40)/numberOfSquares;

        const div = document.createElement("div");
        
        div.classList.add(classToAdd);

        div.style.cssText = `width: ${widthOfDiv}px; height: ${widthOfDiv}px;backgroundcolor`;

        parent.appendChild(div);
    }
}

function sketchingOnDiv() {
    const divsToTrack = document.querySelectorAll(".grid_square");
    
    divsToTrack.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`

            e.target.style.background = color;
        })
    })
}

function getGridWidth() {
    const gridWidth = prompt("Set how many squares in a row of grid you want: ");
    return gridWidth;
}

const buttonSetGridWidth = document.querySelector("button");

buttonSetGridWidth.addEventListener("click", () => {
    const drawingArea = document.querySelector(".container");
    drawingArea.innerHTML = "";

    let gridWidth = prompt("Set how many squares in a row of grid you want: ");

    while (gridWidth > 100) {
        gridWidth = prompt("Set how many squares in a row of grid you want (number can be max 100)");
    }
    
    makeGrid(gridWidth, "grid_square", ".container");
    
    sketchingOnDiv();
})