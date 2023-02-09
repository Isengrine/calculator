function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function substract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate() {
    numArray = numStr.split(" ");
    console.log(numArray);
    for (let i = 1; i < numArray.length; i += 2) {
        switch (numArray[i]) {
            case "+":
                console.log(numArray[i-1], numArray[i+1]);
                numArray[i+1] = add(numArray[i-1], numArray[i+1]);
                break;
            case "-":
                console.log(numArray[i-1], numArray[i+1]);
                numArray[i+1] = substract(numArray[i-1], numArray[i+1]);
                break;
            case "x":
                console.log(numArray[i-1], numArray[i+1]);
                numArray[i+1] = multiply(numArray[i-1], numArray[i+1]);
                break;
            case "/":
                console.log(numArray[i-1], numArray[i+1]);
                numArray[i+1] = divide(numArray[i-1], numArray[i+1]);
                break;
            default:
                break;
        }
    }
    result = numArray.pop();
    numStr = "";
    input();
    return output();
}

function del() {
    numStr = numStr.slice(0, -1);
    input();
}

function clear() {
    numStr = "";
    secondNum = "";
    operator = "";
    result = "";
    input();
    output();
}

function input() {
    if (numStr == "") {
        auxScreen.innerText = 0;
    }
    else {
        auxScreen.innerText = numStr;
    }
}

function output() {
    if (result == "") {
        mainScreen.innerText = 0;
    }
    else {
        mainScreen.innerText = result;
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
let result = "";

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