// Spread Operator (Arrays and Objects)

// Spread Operator (Arrays)

// reference data types: array, object, function
// reference data types actually store the address of the data in memory
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log("array 2: " + arr2)

console.log("array 1: " + arr1)

// confusing sometimes!

// primitive data types: string, number, boolean, null, undefined, symbol
// primitive data types actually store the value in memory
const str1 = "hello";

const str2 = str1 + " world";

console.log(str1)
console.log(str2)

// we can solve this problem with the spread operator!

const arr3 = [...arr1, 5]
console.log("Array 3: ", arr3)

console.log("Array 1 or 2 (They both reference the same array in memory): ", arr2)

// when we type ...arr1, or any array, it's best to just simply think of it as if we are 
//taking all of the values from the array removing the brackets

const arr = [1, 2, 3, 4, 5]; //This is an array variable
// an array literal is the actual array itself, the values inside the array [1,2,3,4,5]
// ...arr: 1, 2, 3, 4, 5

function logArray(arr){
    // arr is assigning the value of the array to the variable arr within the function scope
    console.log("Logging array: ", arr)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// array variable: arr
logArray(arr);

// array literal: [1,2,3,4,5]
logArray([6, 7, 8, "nine", 10]);

console.log('logging arr without spread operator')
console.log(arr)

console.log("logging arr with spread operator")
console.log(...arr)
