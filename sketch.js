// Variables

const tamagnoWidth = 1000;
const tamagnoHeight = 713;



// Html Elements
const title = document.createElement("h1");
title.textContent = "Sketchpad Toy";
document.getElementById("title").appendChild(title);

const buttonData = [
    { text: "Change Size", id: "quantityButton" },
    { text: "Reset", id: "resetButton" },
    { text: "Eraser", id: "eraserButton" },
    { text: "Print", id: "printButton" },
    { text: "Rainbow", id: "rainbowButton" },
    { text: "Darkening", id: "darkeningButton" }
];
buttonData.forEach(({ text, id }) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("custom-button"); // Aplicamos la clase a todos
    button.id = id;
    document.getElementById("title").appendChild(button);
});



// Grid squares

const gridContainer = document.getElementById("grid");
gridContainer.style.display = "grid";
const numberOfDivs = initiateGrids ();


quantityButton.addEventListener("click", () =>{
    const numeros = chooseQuantity();
    if (numeros === false){

    } else{
        initiateGrids (numeros);
    }


});


// Buttons


// pedir tamagno al usuario
function chooseQuantity(){
    let userInput;
    while (true) {
        userInput = prompt("Number from 1 to 110");
        if (userInput === "" || userInput === null){
            alert("Input cancelled")
            return false;
        } else if (userInput > 110){
            alert("Less than 110!");
            continue;
        } else{
            return userInput
        }
    }
}

// Crear los elementos de la cuadrícula dinámicamente
function initiateGrids(gridNumber = 16){

    const tamagnoWidth = 1000;
    const tamagnoHeight = 713;
    const divsSizeHeight = tamagnoHeight/gridNumber;
    const divsSizeWidth = tamagnoWidth/gridNumber;
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, ${divsSizeWidth}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, ${divsSizeHeight}px)`;
    const sqrgridNumber = gridNumber * gridNumber
    for (let i = 0; i < sqrgridNumber; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.addEventListener("mouseover", () =>{
            gridItem.style.backgroundColor = "rgb(40, 40, 40)";
        })
        //eraser
        eraserButton.addEventListener("click", () =>{
            eraser(gridItem);
        })
        //tinta

        printButton.addEventListener("click",()=>{
            tinta(gridItem);
        });


        rainbowButton.addEventListener("click", ()=>{
            rainbow(gridItem);

        });

        resetButton.addEventListener("click", () => {
            gridItem.style.backgroundColor = "rgb(210, 210, 210)";

        })

        darkeningButton.addEventListener("click", () => {
            darkening(gridItem);

        })

        // Añadir el div dentro del contenedor
        gridContainer.appendChild(gridItem);
    }
    return gridNumber;

}

function eraser(gridItem){
    gridItem.addEventListener("mouseover", () =>{
        gridItem.style.backgroundColor = "rgb(210, 210, 210)";

    })
}

function tinta(gridItem){
    gridItem.addEventListener("mouseover", () =>{
        gridItem.style.backgroundColor ="rgb(40, 40, 40)";
    })
}

function rgbRandom(){
    return Math.floor(Math.random()*256)
}
function rainbow(gridItem){
    gridItem.addEventListener("mouseover", () =>{
        gridItem.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()} )`

    })

}

function darkening(gridItem){
    let opacidad = 0;
    gridItem.addEventListener("mouseover", () => {
        opacidad += 0.2;
        gridItem.style.backgroundColor =`rgb(40, 40, 40,${opacidad})`;
    })
}
