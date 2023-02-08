function add(a, b) {
    result = a + b;
    return result;
}

function substract(a, b) {
    result = a - b;
    return result;
}

function multiply(a, b) {
    result = a * b;
    return result;
}

function divide(a, b) {
    result = a / b;
    return result;
}

function operate() {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    
    switch (operator) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            substract(firstNum, secondNum);
            break;
        case "x":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
    }
}

function del() {

}

function clear() {

}

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

let firstNum = "";
let secondNum = "";
let operator = "";
let result;

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        if (operator == "") {
            firstNum += numberBtn.textContent;
            console.log(firstNum);
        }

        else {
            secondNum += numberBtn.textContent;
            console.log(secondNum);
        }
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        if (operator == "") {
            operator = operatorBtn.textContent;
            console.log(operator);
        }

        else {
            operate();
            console.log(result);
            operator = "";
            operator = operatorBtn.textContent;
            console.log(operator);
        }
    });
});