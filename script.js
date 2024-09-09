function makeGrid(numberOfSquares, classToAdd, parentToAppend) {
    for (i = 0; i < numberOfSquares; i++) {
        const parent = document.querySelector(parentToAppend);

        const div = document.createElement("div");
        
        div.classList.add(classToAdd);

        parent.appendChild(div);
    }
}

makeGrid(16, "grid_square", ".container");