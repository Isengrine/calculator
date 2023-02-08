function addMainInput() {
    mainScreen.innerText = inputValue;

    if (inputValue == "") {
        mainScreen.innerText = defaultVaule;
    }
}

function addSideInput() {
    sideScreen.innerText = outputValue;

    if (outputValue == ""){
        sideScreen.innerText = defaultVaule;
    }
}

function add() {
    result = outputValue + inputValue
    mainScreen.innerText = result;
    clear();
}

function substract() {
    result = outputValue - inputValue
    mainScreen.innerText = result;
    clear();
}

function multiply() {
    result = outputValue * inputValue
    mainScreen.innerText = result;
    clear();
}

function divide() {
    result = outputValue / inputValue
    mainScreen.innerText = result;
    clear();
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
    addMainInput();
}

function clear() {
    inputValue = "";
    outputValue = "";
    operator = "";
}

const sideScreen = document.getElementById("input");
const mainScreen = document.getElementById("output");

let result;
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
    addMainInput();
    addSideInput();
});

equalBtn.addEventListener("click", operate);

addBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " +";
        operator = "+";

        inputValue = "";
        addMainInput();
        addSideInput();
    }
    else {
        operate();
        outputValue = "";
    }
})

substractBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " -";
        operator = "-";
        inputValue = "";
        addMainInput();
        addSideInput();
    }
    else {
        operate();
        outputValue = "";
    }
})

multiplyBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " x";
        operator = "x";
        inputValue = "";
        addMainInput();
        addSideInput();
    }
    else {
        operate();
        outputValue = "";
    }
})

divideBtn.addEventListener("click", () => {
    if (outputValue == "") {
        outputValue = inputValue + " /";
        operator = "/";
        inputValue = "";
        addMainInput();
        addSideInput();
    }
    else {
        operate();
        outputValue = "";
    }
})

zero.addEventListener("click", () => {
    inputValue += "0";
    addMainInput();
})

one.addEventListener("click", () => {
    inputValue += "1";
    addMainInput();
})

two.addEventListener("click", () => {
    inputValue += "2";
    addMainInput();
})

three.addEventListener("click", () => {
    inputValue += "3";
    addMainInput();
})

four.addEventListener("click", () => {
    inputValue += "4";
    addMainInput();
})

five.addEventListener("click", () => {
    inputValue += "5";
    addMainInput();
})

six.addEventListener("click", () => {
    inputValue += "6";
    addMainInput();
})

seven.addEventListener("click", () => {
    inputValue += "7";
    addMainInput();
})

eight.addEventListener("click", () => {
    inputValue += "8";
    addMainInput();
})

nine.addEventListener("click", () => {
    inputValue += "9";
    addMainInput();
})