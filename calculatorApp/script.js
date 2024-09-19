let myInput = document.querySelector("#myInput");

function clearInput() {
    myInput.value = "";
}

function calculate() {
    myInput.value = eval(myInput.value);
}

function displayValue(value) {
    myInput.value += value;
}