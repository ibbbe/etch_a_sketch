const div = document.querySelector('#container');
const clear = document.querySelector('#clear');

clear.addEventListener('click', clearGrid);


function createGrid(numOfSquares) {

    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
        const square = document.createElement('div');
        square.textContent = "Abba";
        div.appendChild(square);
        square.style.backgroundColor = "black";
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        });
    }
}

function clearGrid() {
    const numOfSquares = parseInt(prompt("Please input the number:"));
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    createGrid(numOfSquares);
} 
