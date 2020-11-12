const counterRef = document.querySelector("#counter");
const counterValueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]')
const buttonIncrementRef = document.querySelector('button[data-action="increment"]')
// вариант как найти элемент по тегу
const buttonClearRef = counterRef.getElementsByTagName('button')[2]

// let counterValue = Number(counterValueRef.textContent); 
// или: 
let counterValue = 0;

buttonIncrementRef.addEventListener("click", increment);
buttonDecrementRef.addEventListener("click", decrement);
buttonClearRef.addEventListener("click", clear);

function increment (event) {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

function decrement(event)  {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
};


// кнопка очистить 
function clear(event) {
    counterValue = 0;
    counterValueRef.textContent = counterValue;
};