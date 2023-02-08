function addInput() {
    mainScreen.innerText = inputValue;
    sideScreen.innerText = outputValue;

    if (inputValue == "") {
        mainScreen.innerText = defaultVaule;
    }
    if (outputValue == ""){
        sideScreen.innerText = defaultVaule;
    }
}

function add() {
    mainScreen.innerText = outputValue + inputValue;
    clear();
}

function substract() {
    mainScreen.innerText = outputValue - inputValue;
}

function multiply() {
    mainScreen.innerText = outputValue * inputValue;
}

function divide() {
    mainScreen.innerText = outputValue / inputValue;
}

function operate() {
    if (inputValue != "") {
        inputValue = parseFloat(inputValue);
        outputValue = parseFloat(outputValue);
    }
    switch (operator) {
        case "+":
            add();
            break;
        case "-":
            substract();
            break;
        case "x":
            multiply();
            break;
        case "/":
            divide();
            break;
        default:
            break;
    }
}

function del() {
    inputValue = inputValue.slice(0, -1);
    addInput();
}

function clear() {
    inputValue = "";
    outputValue = "";
    operator = "";
}

const sideScreen = document.getElementById("input");
const mainScreen = document.getElementById("output");

let defaultVaule = 0;
let inputValue = "";
let outputValue = "";
let operator = "";

const operators = document.querySelectorAll(".operator");
const addBtn = document.getElementById("+");
const substractBtn = document.getElementById("-");
const multiplyBtn = document.getElementById("x");
const divideBtn = document.getElementById("/");
const equalBtn = document.getElementById("=");
const delBtn = document.getElementById("del");
const clearBtn = document.getElementById("C");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

delBtn.addEventListener("click", del);

clearBtn.addEventListener("click", () => {
    clear();
    addInput();
});

equalBtn.addEventListener("click", operate);

addBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " +";
        operator = "+";

        inputValue = "";
        addInput();
    }
    else {
        operate();
    }
})

substractBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " -";
        operator = "-";
        inputValue = "";
        addInput();
    }
    else {
        operate();
    }
})

multiplyBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " x";
        operator = "x";
        inputValue = "";
        addInput();
    }
    else {
        operate();
    }
})

divideBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " /";
        operator = "/";
        inputValue = "";
        addInput();
    }
    else {
        operate();
    }
})

zero.addEventListener("click", () => {
    inputValue += "0";
    addInput();
})

one.addEventListener("click", () => {
    inputValue += "1";
    addInput();
})

two.addEventListener("click", () => {
    inputValue += "2";
    addInput();
})

three.addEventListener("click", () => {
    inputValue += "3";
    addInput();
})

four.addEventListener("click", () => {
    inputValue += "4";
    addInput();
})

five.addEventListener("click", () => {
    inputValue += "5";
    addInput();
})

six.addEventListener("click", () => {
    inputValue += "6";
    addInput();
})

seven.addEventListener("click", () => {
    inputValue += "7";
    addInput();
})

eight.addEventListener("click", () => {
    inputValue += "8";
    addInput();
})

nine.addEventListener("click", () => {
    inputValue += "9";
    addInput();
})