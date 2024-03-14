// create variables called vertical and horizonal to store figures for both of these orientations. 
const vertical = 16;
const horizontal = 16;

// select #grid div and store in a variable called grid
const grid = document.querySelector('#grid');

// create a box that later make up part of the grid
let div; 


// Add a new div and adjust style. Do this until the number of divs surpasses the number stored in the horizontal and vertical variables.
for (let i = 0; i < vertical; i++) {
    for (let j = 0; j < horizontal; j++) {
        div = document.createElement("div");
        div.classList.add("box");
        grid.appendChild(div);
    }
}


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("new");
    });
});


