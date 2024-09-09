function makeGrid(numberOfSquares, classToAdd, parentToAppend) {
    for (i = 0; i < numberOfSquares; i++) {
        const parent = document.querySelector(parentToAppend);

        const div = document.createElement("div");
        
        div.classList.add(classToAdd);

        parent.appendChild(div);
    }
}

makeGrid(16, "grid_square", ".container");

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