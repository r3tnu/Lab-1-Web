const numberInputRegex = /^-?(\d+(\.\d+)?)$/;

const submitButton = document.querySelector('.submit-button');

const xInput = document.querySelector('.x-input');

let validY = false;
const yInput = document.querySelector('.y-input');
yInput.addEventListener('input', () => {

    const y = parseFloat(yInput.value);
    if (y >= -5 && y <= 3 && numberInputRegex.test(yInput.value) && yInput.value.replaceAll('.', '').length < 16) {
        validY = true;
        yInput.style.background = "lightgreen";
    } else {
        validY = false;
        yInput.style.background = "indianred";
    }
    
    submitButton.disabled = !(validY && validR);
});

let validR = false;
const rInput = document.querySelector('.r-input');
rInput.addEventListener('input', (e) => {
    const r = parseFloat(rInput.value);
    if (r >= 2 && r <= 5 && numberInputRegex.test(rInput.value) && rInput.value.replace('.', '').length < 16) {
        validR = true;
        rInput.style.background = "lightgreen";
    } else {
        validR = false;
        rInput.style.background = "indianred";
    }
    submitButton.disabled = !(validY && validR);
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `php/checkPoint.php?X=${xInput.value}&Y=${yInput.value}&R=${rInput.value}`
    fetch(url)
        .then(response => response.text())
        .then(insertData);
});

function insertData(data) {
    const resultsTable = document.querySelector('.results-table');
    const innerHTML = resultsTable.innerHTML;
    resultsTable.innerHTML = innerHTML + data;
}