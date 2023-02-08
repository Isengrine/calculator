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

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => {
        console.log(numberBtn.textContent);
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        console.log(operatorBtn.textContent);
    });
});