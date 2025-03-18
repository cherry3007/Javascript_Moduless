import addFunc from './functions/plus.js'; 
import { subtract as minus } from './functions/minus.js'; 
import { multiply as times } from './functions/multiply.js'; 
import divideFunc from './functions/divide.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    document.getElementById('add').addEventListener('click', () => {
        result.textContent = addFunc(+num1.value, +num2.value);
    });

    document.getElementById('subtract').addEventListener('click', () => {
        result.textContent = minus(+num1.value, +num2.value);
    });

    document.getElementById('multiply').addEventListener('click', () => {
        result.textContent = times(+num1.value, +num2.value);
    });

    document.getElementById('divide').addEventListener('click', () => {
        result.textContent = divideFunc(+num1.value, +num2.value);
    });
});
