let display = document.getElementById("display");

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    display.innerText += " " + operator + " ";
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*'));
    } catch (error) {
        display.innerText = "Erro";
    }
}
