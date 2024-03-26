const container = document.querySelector('#container');
const clear = document.querySelector('#btn');

clear.addEventListener('click', clearGrid);

function createGrid(numOfSquares) {
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const squareSize = 600 / numOfSquares;
        container.appendChild(square);
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        });
    }
}

function clearGrid() {
    const numOfSquares = parseInt(prompt("Please input the number:"));
    if (numOfSquares > 100) {
        alert('Please input the number between 1 and 100.');
        clearGrid();
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(numOfSquares);
} 