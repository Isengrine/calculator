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
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return substract(firstNum, secondNum);
        case "x":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            break;
    }
}

function del() {
    firstNum = firstNum.slice(0, -1);
    input();
}

function clear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    input();
}

function input() {
    if (firstNum == "") {
        mainScreen.innerText = 0;
    }
    else {
        mainScreen.innerText = firstNum;
    }
}

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("=");
const delBtn = document.getElementById("del");
const clearBtn = document.getElementById("C");
const mainScreen = document.getElementById("mainScreen");
const auxScreen = document.getElementById("auxScreen");

let firstNum = "";
let secondNum = "";
let operator = "";

delBtn.addEventListener("click", del);

clearBtn.addEventListener("click", clear);

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        firstNum += numberBtn.textContent;
        input();
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        console.log(operatorBtn.textContent);
    });
});