function add() {

}

function substract() {

}

function multiply() {
    
}

function divide() {
    
}

function operate() {

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
        operator = "";
        operator = operatorBtn.textContent;
        console.log(operator);
    });
});