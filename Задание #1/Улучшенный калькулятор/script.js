
function plus() {
    let numberOne = document.getElementById('getNumber').value;
    let numberTwo = document.getElementById('getResult').value;
    let result = +numberOne + +numberTwo;

    document.getElementById('showResult').value = result;
}

function minus() {
    let numberOne = document.getElementById('getNumber').value;
    let numberTwo = document.getElementById('getResult').value;
    let result = numberOne - numberTwo;

    document.getElementById('showResult').value = result;
}

function times() {
    let numberOne = document.getElementById('getNumber').value;
    let numberTwo = document.getElementById('getResult').value;
    let result = numberOne * numberTwo;

    document.getElementById('showResult').value = result;
}

function divide() {
    let numberOne = document.getElementById('getNumber').value;
    let numberTwo = document.getElementById('getResult').value;
    let result = numberOne / numberTwo;

    document.getElementById('showResult').value = result;
}

function deleteMe() {
    document.getElementById('getNumber').value = " ";
    document.getElementById('getResult').value = " ";
    document.getElementById('showResult').value = " ";
}





