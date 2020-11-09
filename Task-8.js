const buttonRendertRef = document.querySelector('button[data-action="render"]')
const buttonClearRef = document.querySelector('button[data-action="destroy"]')
const inputNumberRef =document.querySelector("#controls > input")
const boxesRef = document.querySelector("#boxes")

buttonRendertRef.addEventListener("click", event =>
    createBoxes(inputNumberRef.value));
        

buttonClearRef.addEventListener("click", destroyBoxes)

function createBoxes(amount) {
   let width = 30;
    let height = 30;

    // let divElement = document.createElement("div");
    // boxesRef.append(divElement)
    for (let i = 0; i < amount; i += 1) {
        // создаем элемент
    let divElement = document.createElement("div");
    boxesRef.append(divElement)
        // рандомный цвет 
        const colors = ["orange", "pink", "green", "red", "blue", "black", "yellow", "navy", "LawnGreen", "DeepPink",
        "MediumSpringGreen", "OrangeRed", "Fuchsia", "NavajoWhite", "Maroon", "Lime"]
        const max = colors.length - 1;
        const min = 0;
        const index = Math.round(Math.random() * (max - min) + min);
        const color = colors[index];

        divElement.style.backgroundColor = `${color}`;

        if (i === 0) {
        divElement.style.width = `${width}px`
        divElement.style.height = `${height}px`
        }
        if (i > 0) {
            divElement.style.width = `${width+10*i}px`;
            divElement.style.height = `${height + 10 * i}px`
        }
    } 
}


function destroyBoxes(event) {
    boxesRef.innerHTML = "",
    inputNumberRef.value=""
}