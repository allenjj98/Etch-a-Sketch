// select #grid div and store in a variable called grid
const grid = document.querySelector('#grid');


// create variables called vertical and horizonal to store figures for both of these orientations. 
const dimension = 16;


// create a button variable that will represent the button in the dom. Attach an eventlistener to the button that will use prompt to display a pop-up to the user. 
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Grid Size: "));
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild)
    }
    createGrid(gridSize)
    hover()
})




function createGrid(size) {
    let div;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            div = document.createElement("div");
            div.classList.add("box");
            let width = 100 / size;
            console.log(width)
            div.style.width = width + "%";
            grid.appendChild(div);
        }
    }
}


function hover() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.classList.add("new");
        });
    });
}


createGrid(dimension)
hover()

