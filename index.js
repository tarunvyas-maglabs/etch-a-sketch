const body = document.querySelector("body");
const container = document.querySelector(".container");

createGrid(16);

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Change Grid Size";
container.parentNode.prepend(button);
button.addEventListener("click", () => {
    let input = prompt("Enter number of pixels");
    if (input === null) return;
    let num = Number(input);
    if (Number.isNaN(num) || num <= 0) {
        alert("Please enter a positive number.");
        return;
      }
    
    num = Math.min(num, 100);
    createGrid(num);
});


function createGrid(num){
    container.innerHTML = "";
    
    for (let i = 0; i < num; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < num; j++){
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        container.append(row);
    }
    body.appendChild(container);
    addListenersToBoxes();
}

function addListenersToBoxes(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "blue";
        });
    });
}