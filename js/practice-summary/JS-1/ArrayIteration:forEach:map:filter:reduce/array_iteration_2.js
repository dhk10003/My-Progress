// Array map method
const text = "The Quick Brown Fox";
const words = text.split(" ");
const newWords = words.map(
  (word) => word[0].toLowerCase() + word.slice(1).toUpperCase()
);
const result = newWords.join(" ");
console.log(result); // tHE qUICK bROWN fOX

const arrMap = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddMap = arrMap.map((num) => num % 2 !== 0);
console.log(oddMap); // [true, false, true, false, true, false, true, false, true]
const oddMap2 = arrMap.map((num) => {
  if (num % 2 !== 0) {
    return num;
  }
});
console.log(oddMap2); // [1, undefined, 3, undefined, 5, undefined, 7, undefined, 9]

// Task find the max number in inner arrays
const arrTask = [
  [15, 8, 22],
  [11, 34, 23],
  [45, 22, 1],
  [23, 42, 21],
];

const maxNum = arrTask.map((item) => Math.max(...item)); // what is ...item? it is spread operator to spread the array into individual numbers
console.log(maxNum); // [22, 34, 45, 42]

// using sort method
const maxNum2 = arrTask.map((item) => item.sort((a, b) => b - a)[0]);
//or
// const maxNum2 = arrTask.map((item) => item.sort((a, b) => a - b).[item.length - 1]]);
console.log(maxNum2); // [22, 34, 45, 42]

// Array filter method
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odd = arr.filter((num) => num % 2 !== 0);
console.log(odd); // [1, 3, 5, 7, 9]

const words2 = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result2 = words2.filter((word) => word.length > 6);
console.log(result2); // ["exuberant", "destruction", "present"]

const words3 = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result3 = words3.filter((word) => word.includes("e"));
console.log(result3); // ["elite", "exuberant", "destruction", "present"]

// Array reduce method
const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 45

const sum = arrReduce.reduce((acc, num) => acc + num, 10); // 10 is initial value
console.log(sum); // 10 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 55

const sub = arrReduce.reduce((acc, num) => acc - num, 5);
console.log(sub); // 5 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 = -40

// Create new array with reduce method
const even = even.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []); // [] is initial value
console.log(even); // [2, 4, 6, 8]

// Create filtered array with reduce method
const evenSum = evenSum.reduce((acc, num) => {
  if (num % 2 === 0) {
    return acc + num;
  }
  return acc;
}, 0);
console.log(evenSum); // 2 + 4 + 6 + 8 = 20

// Reduce method with strings
const names = ["John", "David", "Mike", "Smith", "Tom"];
const result4 = names.reduce((acc, item) => acc + "-" + item, "Welcome"); // "Welcome" is initial value
console.log(result4); // Welcome-John-David-Mike-Smith-Tom

// Spread operator
const arrSpread = [1, 2, 3, 4, 5, 6];
// Instead of arrSpread.push(7, 8, 9);
const arrSpread2 = [...arrSpread, 7, 8, 9];
console.log(arrSpread2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Validate not using if statement
let data; // = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const html = data && data.map((item) => `<li>${item}</li>`);
console.log(html);
// Optional chaining
const html2 = data?.map((item) => `<li>${item}</li>`);
console.log(html2);

// nullish coalescing operator (??)
// Solution: nullish coalescing operator (??) will only check null and undefined
//Problem Example:
// Problem happen: 0, "", false, null, undefined
const numberNullish = [3, 5, 6, undefined, null, 0];
numberNullish.forEach((num) => {
  if (num) {
    console.log(num, "is a number");
  } else {
    console.log(num, "is not a number"); // 0 is not a number
  }
});
// Fix problem with nullish coalescing operator
numberNullish.forEach((num) => {
  if (num ?? false) {
    console.log(num, "is a number"); // 0 is a number
  } else {
    console.log(num, "is not a number"); // undefined and null is not a number
  }
});

//Problem Example:
// Problem happen: 0, "", false, null, undefined
const prompt = "Please enter a number between 0 to 10, default is 5";
const value = prompt || 5;
console.log(value); // 0 is not a number
// Fix problem with nullish coalescing operator
const prompt2 = "Please enter a number between 0 to 10, default is 5";
const value2 = prompt2 ?? 5;
console.log(value2); // 0 is a number
