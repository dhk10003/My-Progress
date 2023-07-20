// forEach() method
// Desprciption: forEach() method executes a provided function once for each array element.
// Syntax: arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
// Practice:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
numbers.forEach((number) => {
  if (number % 2 !== 0) {
    sum += number;
  }
});
console.log(sum);

// Array.prototype.map()
// Description: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: arr.map(callback(currentValue[, index[, array]])[, thisArg])
// Practice:

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersOutput = numbers2.map((number) => {
  if (number % 2 === 0) {
    return number * 2;
  } else {
    return number;
  }
});
console.log(numbersOutput);

const words = ["welcome", "to", "clarusway", "full", "stack", "development"];
const newWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(newWords);

const names = ["john", "david", "mike", "tim"];
const result1 = names.map(function (name) {
  const output = name[0].toUpperCase() + name.slice(1);
  return output;
});
console.log(result1);

// arrow function version
const result2 = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(result2);

const ages = [22, 13, 25, 32, 35, 18];
const agesOutput = ages.map((age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
});
console.log(agesOutput);

// Array.prototype.filter()
// Description: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: arr.filter(callback(element[, index[, array]])[, thisArg])
// Practice:

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersFilter = numbers3.filter((number) => number % 2 === 0);
console.log(numbersFilter);

let numbers4 = [45, 9, 4, 16, 25];
const result = numbers4.filter((number, index) => {
  if (number % 2 === 0 && index > 2) {
    return number;
  }
});
console.log(result);

const names2 = ["John", "David", "Mike", "Smith", "Tom"];
const resultFilter = names2.filter((name) => {
  if (name.startsWith("J") || name.startsWith("D")) {
    return name;
  }
});
console.log(resultFilter);

// Chaining methods
// Practice:

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = numbers5.filter((item) => item % 2);
const result3 = odds.map((item) => item ** 2);
console.log(result3);

// with chaining
console.log(numbers5.filter((item) => item % 2).map((item) => item ** 2));

// Array.prototype.reduce()
// Description: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// Syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// Practice:
const numbers6 = [1, 2, 3, 4, 5];
const sum2 = numbers6.reduce((acc, item) => acc + item, 0);
console.log(sum2); // 15

const numbers7 = [1, 2, 3, 4, 5];
const sum3 = numbers7.reduce((acc, item) => acc + item, 10);
console.log(sum3); // 25

const names3 = ["John", "David", "Mike", "Smith", "Tom"];
const result4 = names3.reduce((acc, item) => {
  return acc + "-" + item;
}, "Welcome");
console.log(result4);
