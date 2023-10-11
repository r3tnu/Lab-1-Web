const xInput = document.querySelector('.x-input');

let validY = false;
const yInput = document.querySelector('.y-input');

yInput.addEventListener('change', () => {
    const y = parseFloat(yInput.value);
    if (y > -5 && y < 3) {
        validY = true;
        //TODO: change color
    } else {
        //TODO: change color
    }
});

let validR = false;
const rInput = document.querySelector('.r-input');

rInput.addEventListener('change', (e) => {
    const r = parseFloat(rInput.value);
    if (r > -5 && r < 3) {
        validR = true;
        //TODO: change color
    } else {
        //TODO: change color
    }
})

document.querySelector('.submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validY && validR) {
        const url = `php/checkPoint.php?x=${xInput.value}&y=${yInput.value}&r=${rInput.value}`
        document.querySelector('.debug').innerHTML = url;
        const promise = fetch(url);
    }
});

