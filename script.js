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
    const divToTrack = document.querySelector(".grid_square");

    divToTrack.addEventListener('mousemove', (e) => {
        
        let help = document.querySelector(".support");

        help.textContent = `
        Client X: ${e.clientX}
        Client Y: ${e.clientY}`;


        
        /* let pixel = document.createElement("div"); 

        pixel.classList.add(classOfTrack);

        divToTrack.appendChild(pixel); */
    });
}

sketchingOnDiv();