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
    }
}

function del() {

}

function clear() {

}

function input() {
    mainScreen.innerText = firstNum;
}

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const mainScreen = document.getElementById("mainScreen");
const auxScreen = document.getElementById("auxScreen");

let firstNum = "";
let secondNum = "";
let operator = "";

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