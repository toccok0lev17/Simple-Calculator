
import { calculate } from "./calculate.js";
let numbers = Array.from(document.querySelectorAll('.num, .point'));
numbers.map(x => x.addEventListener('click', clickOnNumber));

let allSpans = Array.from(document.querySelectorAll('span'));
let symbols = [];
allSpans.forEach(element => {
    if (element.className !== 'num' && element.className !== 'point') {
        symbols.push(element);
    }
});

symbols.map(x => x.addEventListener('click', onPressSymbol));

let calcScreen = document.querySelector('input');

let currentSymbol = '';




function clickOnNumber(e) {
    e.preventDefault();
    let pressedNumber = e.currentTarget.innerText;
    calcScreen.value += pressedNumber;

}
function onPressSymbol(e) {
    e.preventDefault();
    let pressedSymbol = e.currentTarget.innerText;

    if (pressedSymbol === '=' && (!calcScreen.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/) ||
        calcScreen.value.split('')[calcScreen.value.split('').length - 1] === '.')) {

    } else {

        if (calcScreen.value.length !== 0) {
            if (pressedSymbol === 'C') {
                if (calcScreen.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/)) {
                    calcScreen.value = calcScreen.value.substring(0, calcScreen.value.length - 1);

                } else {
                    calcScreen.value = '';
                    currentSymbol = '';

                }
            }
            else if (currentSymbol !== '' && calcScreen.value.match(/\*||\+||\-||\/\=/g) && calcScreen.value.split(currentSymbol).length >= 2) {
                calculate(currentSymbol);
                if (pressedSymbol !== '=' && pressedSymbol !== '%') {

                    calcScreen.value += pressedSymbol;
                    currentSymbol = pressedSymbol;

                }
            } else {
                currentSymbol = pressedSymbol;
                calcScreen.value += currentSymbol;
            }
        } else {
            if (pressedSymbol === '-') {
                calcScreen.value += pressedSymbol;
            }
        }
        if (pressedSymbol === '%') {

            calcScreen.value = (Number(calcScreen.value.split(pressedSymbol)[0]) / 100);
        }
    }
}
