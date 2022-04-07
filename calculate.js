
export function calculate(currentSymbol) {
    let calcScreen = document.querySelector('input');
    let [num1, num2] = calcScreen.value.split(currentSymbol);
    if (currentSymbol === '+') {

        calcScreen.value = Number(num1) + Number(num2);
    }
    if (currentSymbol === '-') {

        calcScreen.value = Number(num1) - Number(num2);
    }
    if (currentSymbol === '*') {

        calcScreen.value = Number(num1) * Number(num2);
    }
    if (currentSymbol === '/') {

        calcScreen.value = Number(num1) / Number(num2);
    }
    

}