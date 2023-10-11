const submitButton = document.querySelector('.submit-button');

const xInput = document.querySelector('.x-input');

let validY = false;
const yInput = document.querySelector('.y-input');

yInput.addEventListener('input', () => {
    const y = parseFloat(yInput.value);
    if (y >= -5 && y <= 3) {
        validY = true;
        yInput.style.background = "green";
    } else {
        validY = false;
        yInput.style.background = "red";
    }
    
    if (!(validY && validR)) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
});

let validR = false;
const rInput = document.querySelector('.r-input');

rInput.addEventListener('input', (e) => {
    const r = parseFloat(rInput.value);
    if (r >= 2 && r <= 5) {
        validR = true;
        rInput.style.background = "green";
    } else {
        validR = false;
        rInput.style.background = "red  ";
    }
    
    if (!(validY && validR)) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const url = `php/checkPoint.php?x=${xInput.value}&y=${yInput.value}&r=${rInput.value}`
    document.querySelector('.debug').innerHTML = url;
    const promise = fetch(url);
});