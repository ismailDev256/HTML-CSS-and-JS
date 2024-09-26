

let number = document.querySelector('.listen');
let display = document.querySelector('.ecran');

number.addEventListener('click', () => {
    display.value += number.value;
})