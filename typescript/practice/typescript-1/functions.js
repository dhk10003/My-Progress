"use strict";
const func = (num1, num2) => num1 + num2;
const greet = (greeting, name) => {
    // Name will default to undefined if value is not passed in
    return greeting + ' ' + name ? name : "" + '!';
};
console.log(greet('Hello', 'Steve'));
console.log(greet('Hello')); // Hello undefined!
// function with rest parameters
function greetPeople(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(greetPeople('Hello', 'Steve', 'Bill', 'James', 'Erica')); // Hello Steve, Bill, James, Erica!

