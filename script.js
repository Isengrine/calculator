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
    for (let i = 1; i < numArray.length; i += 2) {
        switch (numArray[i]) {
            case "+":
                numArray[i+1] = add(numArray[i-1], numArray[i+1]);
                break;
            case "-":
                numArray[i+1] = substract(numArray[i-1], numArray[i+1]);
                break;
            case "x":
                numArray[i+1] = multiply(numArray[i-1], numArray[i+1]);
                break;
            case "/":
                numArray[i+1] = divide(numArray[i-1], numArray[i+1]);
                break;
            default:
                break;
        }
    }
    result = numArray[numArray.length - 2];
    result = Math.round(result * 1000000)/1000000;
    return output();
}

function del() {
    numStr = numStr.slice(0, -1);
    input();
}

function clear() {
    numStr = "";
    dot = false;
    operator = "";
    result = "";
    input();
    output();
}

function input() {
    if (numStr == "") {
        auxScreen.innerText = "";
    }
    else {
        auxScreen.innerText = numStr;
    }
}

function output() {
    if (result == "") {
        mainScreen.innerText = 0;
    }
    else if (isNaN(result)) {
        mainScreen.innerText = "Syntax ERROR";
    }
    else {
        mainScreen.innerText = result;
    }
}

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const pointBtn = document.getElementById(".");
const equalsBtn = document.getElementById("=");
const delBtn = document.getElementById("del");
const clearBtn = document.getElementById("C");
const mainScreen = document.getElementById("mainScreen");
const auxScreen = document.getElementById("auxScreen");

let numStr = "";
let operator = "";
let dot = false;
let result = "";

delBtn.addEventListener("click", del);

clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", () => {
    numStr += " ="
    dot = true;
    input();
    operate();
});

pointBtn.addEventListener("click", () => {
    if (!dot) {
        numStr += ".";
        dot = true;
        input();
    }

    else {
        return;
    }
})

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        if (mainScreen.innerText != 0) {
            clear();
            numStr += numberBtn.textContent;
            input();
        }
        else {
            numStr += numberBtn.textContent;
            input();
        }
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        if (mainScreen.textContent != 0) {
            tmp = result;
            clear();
            numStr = tmp;
            numStr += " " + operatorBtn.textContent + " ";
            dot = false;
            input();
        }
        else {
            numStr += " " + operatorBtn.textContent + " ";
            dot = false;
            input();
        }
    });
});