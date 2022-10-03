// Function declaration
function printFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

// Function invokation
printFullName('Peter', 'Ivanov');
printFullName('Ivan', 'Petrov');

// Function expression
let countDown = function (number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

countDown(10);

// Arrow function
let countUp = (max) => {
    for (let i = 0; i <= max; i++) {
        console.log(i);
    }
}

countUp(10);

// Return value
function sum(a, b) {
    return a + b;
}

let sumArrow = (a, b) => a + b;

// Methods
let firstName = 'Pesho';
console.log(firstName.toUpperCase());

// Functions can have default parameters
let countToTwenty = function (number = 0) {
    for (let i = number; i <= 20; i++) {
        console.log(i);
    }
}

countToTwenty();