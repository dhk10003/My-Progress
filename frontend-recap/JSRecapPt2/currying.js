// function add(a,b){
//     return a + b
// }

function curriedAdd(a) {
    // a is a closure variable
    return function (b) {
        return a + b
    }
}

const addFive = curriedAdd(5)
const add10 = curriedAdd(10)

console.log(addFive(10))
console.log(add10(10))

// example 2:

function multiply(x) {
    return function (y) {
        return x * y;
    };
}

const add5 = curriedAdd(5);
//   add5 now becomes a function that will add 5 to whatever number is passed into it

const multiplyBy2 = multiply(2);
//   multiplyBy2 now becomes a function that will multiply whatever number is passed into it by 2

const composedFunction = multiplyBy2(add5);
//   composedFunction now becomes a function that will multiply whatever number is passed into it by 2, and then add 5 to the result
const result = composedFunction(3); // result is 16
//   composedFunction(3) is the same as multiplyBy2(add5(3))

console.log(result)


// WE WILL LEARN ABOUT LODASH LATER!
// You can implement currying manually, as shown in the examples above. 
// However, there are libraries and helper functions available in JavaScript, 
// such as Lodash's curry, that simplify the process.

// const _ = require("lodash");

// function add(x, y) {
//   return x + y;
// }

// const curriedAdd = _.curry(add);

// const add5 = curriedAdd(5);
// const result = add5(3); // result is 8