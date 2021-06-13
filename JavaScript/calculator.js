function add (x, y){
    return x + y;
}

function subtract (x, y){
    return x - y;
}

function multiply (x, y){
    return x * y;
}

function divide (x, y){
    return x / y;
}

function calculator (x, y, operator) {
    return operator(x, y);
}

console.log(calculator(4,6, multiply));
console.log(calculator(40, 25, subtract));
console.log(calculator(48,6, divide));
console.log(calculator(74,62, add));