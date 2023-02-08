function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    numStr = numStr.split(" ");
    console.log(numStr);
}

function del() {
    numStr = numStr.slice(0, -1);
    input();
}

function clear() {
    numStr = "";
    secondNum = "";
    operator = "";
    input();
}

function input() {
    if (numStr == "") {
        auxScreen.innerText = 0;
    }
    else {
        auxScreen.innerText = numStr;
    }
}

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("=");
const delBtn = document.getElementById("del");
const clearBtn = document.getElementById("C");
const mainScreen = document.getElementById("mainScreen");
const auxScreen = document.getElementById("auxScreen");

let numStr = "";
let secondNum = "";
let operator = "";

equalsBtn.addEventListener("click", operate);

delBtn.addEventListener("click", del);

clearBtn.addEventListener("click", clear);

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        numStr += numberBtn.textContent;
        input();
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        numStr += " " + operatorBtn.textContent + " ";
        input();
    });
});