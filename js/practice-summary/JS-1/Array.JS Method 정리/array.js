// Array Push Method
// Push Method adds one or more elements to the end of an array and returns the new length of the array.
const arr = ["red", "green", "blue", "purple", "white"];
const arrLength = arr.push("black");
console.log(arrLength); //return the length of the array
console.log(arr); //return the array

const emptyArr = [];
const emptyArrLength = prompt("The length of the array is: ");

for (let i = 0; i < emptyArrLength; i++) {
  emptyArr.push(i);
}
console.log(emptyArr);

// Array Pop Method
// Pop Method removes the last element from an array and returns that element.
const num = [1, 2, 3, 4, 5, 6, 7];
const removedNum = num.pop();
console.log(removedNum); //return the removed element
console.log(num); //return the array

// Array Unshift Method
// Unshift Method adds one or more elements to the beginning of an array and returns the new length of the array.
const names = ["John", "Jane", "Jack", "Jill"];
const namesLength = names.unshift("James");
console.log(namesLength); //return the length of the array
console.log(names); //return the array

// Array Shift Method
// Shift Method removes the first element from an array and returns that element.
const fruits = ["apple", "banana", "orange", "grapes"];
const removedFruit = fruits.shift();
console.log(removedFruit); //return the removed element
console.log(fruits); //return the array

// Practice
const arr1 = ["red", "blue", "purple", "white", "orange"];
const orange = arr1.pop();
const red = arr1.shift();
arr1.push(red);
arr1.unshift(orange);
console.log(arr1);

// Array Splice Method
// Splice Method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const arr2 = ["red", "blue", "purple", "white", "orange"];
const removed = arr2.splice(2, 1, "green", "yellow"); //remove 1 element from index 2 and add 2 elements
console.log(removed); //return the removed element
console.log(arr2); //return the array
// do not delete
const removed2 = arr2.splice(1, 0, "green", "yellow"); //add 2 elements from index 2
console.log(removed2); //return the removed element (empty array)
console.log(arr2); //return the array

// Array Concat Method
// Concat Method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr4 = ["red", "blue", "purple", "white", "orange"];
const arr5 = ["green", "yellow", "black", "pink"];
const arr6 = [1, 2, 3];
const merged = arr4.concat(arr5, arr6, "Hardcoded");
console.log(merged); //return the new array

// Array Slice Method
// Slice Method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
const arr3 = ["red", "blue", "purple", "white", "orange"];
const sliced = arr3.slice(1, 3); //return a new array from index 1 to index 2
console.log(sliced); //return the new array
console.log(arr3); //return the array

// Array IndexOf and lastIndexOf Method
// IndexOf Method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// LastIndexOf Method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// It is case sensitive.
const arr7 = ["red", "blue", "purple", "white", "orange", "blue"];
const index = arr7.indexOf("blue");
const lastIndex = arr7.lastIndexOf("blue");
const secondIndex = arr7.indexOf("blue", 2); //start searching from index 2
const caseSensitive = arr7.indexOf("Blue"); //return -1
console.log(index); //return the index of the element
console.log(lastIndex); //return the last index of the element
console.log(secondIndex); //return the index of the element
console.log(caseSensitive); //return -1

// Array reverse Method
// Reverse Method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const arr8 = ["red", "blue", "purple", "white", "orange"];
const reversed = arr8.reverse();
console.log(reversed); //return the reversed array
console.log(arr8); //return the reversed array

// Array join Method
// Join Method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
const arr9 = ["red", "blue", "purple", "white", "orange"];
const plainJoined = arr9.join();
const joined = arr9.join("-");
console.log(plainJoined); //return the string
console.log(joined); //return the string

// Array includes Method
// Includes Method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arr10 = ["red", "blue", "purple", "white", "orange"];
const includes = arr10.includes("blue");
const includes2 = arr10.includes("Blue");
const includes3 = arr10.includes("blue", 2); //start searching from index 2
console.log(includes); //return true
console.log(includes2); //return false
console.log(includes3); //return false

// Practice
// Convert sting to array and Reverse it
const str = "Hello World";
const strArr = str.split("");
console.log(strArr); //return the array
console.log(strArr.reverse().join("")); //return the reversed string

// Array sort Method
// Sort Method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const arr11 = ["red", "blue", "purple", "white", "orange"];
const sorted = arr11.sort();
console.log(sorted); //return the sorted array
const arr12 = [1, 12, 3, 4, 50, 6, 756, 8, 9];
const sorted2 = arr12.sort();
console.log(sorted2); //return the sorted array
// sort numbers in ascending order
const sorted3 = arr12.sort((a, b) => a - b);
console.log(sorted3); //return the sorted array
// sort numbers in descending order
const sorted4 = arr12.sort((a, b) => b - a);
console.log(sorted4); //return the sorted array
// case sensitive sort
const arr13 = ["red", "blue", "Purple", "white", "orange"];
const sorted5 = arr13.sort();
console.log(sorted5); //return the sorted array
const sorted6 = arr13.sort((a, b) => a.localeCompare(b));
console.log(sorted6); //return the sorted array
// case insensitive sort
const sorted7 = arr13.sort((a, b) =>
  a.localeCompare(b, undefined, { sensitivity: "base" })
);
console.log(sorted7); //return the sorted array

// Nested Array
// Nested Array is an array whose elements are arrays.
const nestedArr = [
  5,
  "David",
  ["red", "blue", "purple", "white", "orange"],
  ["green", "yellow", "black", "pink"],
  [1, 2, 3],
];
console.log(nestedArr[2][2]); //return purple
console.log(nestedArr[3][3]); //return pink
console.log(nestedArr[4][1]); //return 2
console.log(nestedArr[4][1] + 1); //return 3
console.log(nestedArr[4][1] + nestedArr[0]); //return 7

// Looping over Array
// for loop
const arr14 = ["red", "blue", "purple", "white", "orange"];
for (let i = 0; i < arr14.length; i++) {
  console.log(arr14[i]);
}
// while loop
let i = 0;
while (i < arr14.length) {
  console.log(arr14[i]);
  i++;
}
// for in loop
for (let i in arr14) {
  console.log(arr14[i]);
}
// for of loop
for (let i of arr14) {
  console.log(i);
}
// forEach loop
arr14.forEach((i) => console.log(i));
