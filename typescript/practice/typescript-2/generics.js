"use strict";
const last = (arr) => arr[arr.length - 1];
// T is a type variable
// since all of the values in our array are numbers, T becomes number
const l = last([1, 2, 3]);
console.log(l);
// since all of the values in our array are strings, T becomes string
const l2 = last(['a', 'b', 'c']);
console.log(l2);
// when we use inference, T becomes a union type (number | string | boolean)
const l3 = last([1, 'a', true]);
console.log(l3);
// union:
const l4 = last(['a', 'b', 'c']);
// create a union array:
console.log('union array:');
const makeArr = (x, y) => [x, y];
const arr1 = makeArr(5, 6);
console.log(arr1);
const arr2 = makeArr('a', 'b');
console.log(arr2);
const arr3 = makeArr("string", 5);
console.log(arr3);
// create a tuple:
console.log('tuple:');
const makeTuple = (x, y) => [x, y];
const tuple1 = makeTuple(5, 6);
console.log(tuple1);
const tuple2 = makeTuple('a', 'b');
console.log(tuple2);
const tuple3 = makeTuple('a', 5);
console.log(tuple3);
// default types:
const makeTuplewithDefaultType = (t, y) => [t, y];
const tuple4 = makeTuplewithDefaultType("string", 5);
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
let bob = {
    firstName: 'bob',
    lastName: 'junior',
    age: 25
};
const fullName = makeFullName(bob);
console.log(fullName);
