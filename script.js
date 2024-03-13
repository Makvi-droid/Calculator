function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let num1 = parseInt(prompt('Enter a number'));
let sign = prompt('Enter a sign: pick between +, - , *, /');
let num2 = parseInt(prompt('Enter a number'));


if(sign === '+'){
    alert(add(num1, num2));
}
else if(sign === '-'){
    alert(subtract(num1, num2));
}
else if(sign === 'x'){
    alert(multiply(num1, num2));
}
else if(sign === '/'){
    alert(divide(num1, num2));
}