function makeGrid(numberOfSquares, classToAdd, parentToAppend) {
    for (i = 0; i < numberOfSquares*numberOfSquares; i++) {
        const parent = document.querySelector(parentToAppend);

        let widthOfParent = parent.offsetWidth; 

        let widthOfDiv = (widthOfParent - 120)/numberOfSquares;

        const div = document.createElement("div");
        
        div.classList.add(classToAdd);

        div.style.cssText = `width: ${widthOfDiv}px; height: ${widthOfDiv}px;`;

        parent.appendChild(div);
    }
}

makeGrid(100, "grid_square", ".container");

function sketchingOnDiv() {
    const divsToTrack = document.querySelectorAll(".grid_square");

    divsToTrack.forEach((div) => {
        div.addEventListener("mousemove", (e) => {


            /* skrypt zmieniający kolor diva, na który najedzie myszka */
            e.target.style.background = "black"; 
        })
    })
}

sketchingOnDiv();

function getGridWidth() {
    const gridWidth = prompt("Set how many squares in a row of grid you want: ");
    return gridWidth;
}

const buttonSetGridWidth = document.querySelector("button");

buttonSetGridWidth.addEventListener("click", () => {
    getGridWidth();
})

/* backup for sketching function */
/* function sketchingOnDiv() {
    const divsToTrack = document.querySelectorAll(".grid_square");

    divsToTrack.forEach((div) => {
        div.addEventListener("mousemove", (e) => {
            let help = document.querySelector(".support");

            help.textContent = `
            Client X: ${e.clientX}
            Client Y: ${e.clientY}`;
        })
    })
} */