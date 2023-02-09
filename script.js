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
            case "*":
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
    result = result.toString();
    if (result.length > 16) {
        result = parseFloat(result);
        result = result.toExponential(6);
    }
    return output();
}

function del() {
    tmp = numStr.slice(-1);
    if (tmp == " ") {
        numStr = numStr.slice(0, -3);
        input();
    }
    else if (tmp == "=") {
        clear();
    }
    else {
        numStr = numStr.slice(0, -1);
        input();
    }
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

function operatorKeyHandler(key) {
    if (mainScreen.textContent != 0) {
        tmp = result;
        clear();
        numStr = tmp;
        numStr += " " + key + " ";
        dot = false;
        input();
    }
    else if (numStr.length <= 34) {
        numStr += " " + key + " ";
        dot = false;
        input();
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
    tmp = numStr.slice(-1)
    if (tmp != "=") {
        numStr += " ="
        dot = true;
        input();
        operate();
    }
});

pointBtn.addEventListener("click", () => {
    if (!dot && numStr.length <= 34) {
        numStr += ".";
        dot = true;
        input();
    }
})

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        tmp = numStr.slice(-1);
        if (tmp == "=") {
            clear();
            numStr += numberBtn.textContent;
            input();
        }
        else if (numStr.length <= 34) {
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
        else if (numStr.length <= 34) {
            numStr += " " + operatorBtn.textContent + " ";
            dot = false;
            input();
        }
    });
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let key = event.key;
    if (key >= 0 && key <= 9) {
        tmp = numStr.slice(-1);
        if (tmp == "=") {
            clear();
            numStr += key;
            input();
        }
        else if (numStr.length <= 34) {
            numStr += key;
            input();
        }
    }
    else if (key == "Backspace") {
        del();
    }
    else if (key == "Escape") {
        clear();
    }
    else if (key == "." && !dot && numStr.length <= 34) {
        numStr += ".";
        dot = true;
        input();
    }    
    else if (key == "Enter") {
        tmp = numStr.slice(-1)
        if (tmp != "=") {
            numStr += " ="
            dot = true;
            input();
            operate();
        }
    }
    else if (key == "+") {
        operatorKeyHandler(key);
    }
    else if (key == "-") {
        operatorKeyHandler(key);
    }
    else if (key == "*") {
        operatorKeyHandler(key);
    }
    else if (key == "/") {
        operatorKeyHandler(key);
    }
});