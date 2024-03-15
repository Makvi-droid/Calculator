const clear = document.querySelector('#clear');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const equals = document.querySelector('#equals');
const input = document.querySelector('input');
const span = document.querySelector('.span');
const point = document.querySelector('#point');
const remainder = document.querySelector('#remainder');
const allClear = document.querySelector('#clear-all');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const num0 = document.querySelector('#num0');
let total = 0;
let operator = null;


add.addEventListener('click', function(){
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        if (operator === '-') {
            total -= value;
        } else if(operator === '+'){
            total += value;
        }
        else if(operator === 'x'){
            total *= value;
        }
        operator = '+';
        input.value = ''; // Reset the input field
    } else {
        alert("Please enter a valid number.");
    }
});

subtract.addEventListener('click', function(){
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        if (operator === '-') {
            total -= value;
        } else if(operator === '+'){
            total += value;
        }
        else if(operator === 'x'){
            total *= value;
        }
        operator = '-';
        input.value = ''; // Reset the input field
    } else {
        alert("Please enter a valid number.");
    }
});

multiply.addEventListener('click', function(){
    const value = parseInt(input.value);
    if(!isNaN(value)){
        if (operator === '-') {
            total -= value;
        } else if(operator === '+'){
            total += value;
        }
        else if(operator === 'x'){
            total *= value;
        }
        operator = '-';
        input.value = ''; // Reset the input field
    } else {
        alert("Please enter a valid number.");
    }
    }
);

equals.addEventListener('click', function(){
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        if (operator === '-') {
            total -= value;
        } else if(operator === '+'){
            total += value;
        }
        else if(operator === 'x'){
            total *= value;
        }
        input.value = total;
        total = 0; // Reset total for the next calculation
        operator = null;
    } else {
        alert("Please enter a valid number.");
    }
});

point.addEventListener('click', function(){
    input.value += this.textContent;
});

allClear.addEventListener('click', function(){
    input.value = "";
});

clear.addEventListener('click', function(){
    input.value = input.value.slice(0, -1);
});

num1.addEventListener('click', function(){
    input.value += this.textContent;
});

num2.addEventListener('click', function(){
    input.value += this.textContent;
});

num3.addEventListener('click', function(){
    input.value += this.textContent;
});

num4.addEventListener('click', function(){
    input.value += this.textContent;
});

num5.addEventListener('click', function(){
    input.value += this.textContent;
});

num6.addEventListener('click', function(){
    input.value += this.textContent;
});

num7.addEventListener('click', function(){
    input.value += this.textContent;
});

num8.addEventListener('click', function(){
    input.value += this.textContent;
});

num9.addEventListener('click', function(){
    input.value += this.textContent;
});

num0.addEventListener('click', function(){
    input.value += this.textContent;
});