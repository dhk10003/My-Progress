"use strict";
// type annotation:
// TS data types:
// string, number, boolean, null, undefined, any, void, never, Array, Tuple, Enum, Generics, Union, Intersection, Type Alias, Class, Interface, Type Assertion
// string
const message = 'Hello World';
console.log(message);
// number
const age = 30;
console.log(age);
// boolean
const isLogged = true;
console.log(isLogged);
// null
const nullVar = null;
// undefined
const undefinedVar = undefined;
// any
let anyVar = 'Hello';
anyVar = 20;
anyVar = true;
console.log(anyVar);
// void
const voidVar = undefined;
console.log(voidVar);
// never
const error = (message) => {
    throw new Error(message);
};
// Array
const list1 = [1, 2, 3];
const list2 = [1, 2, 3];
console.log(list1);
console.log(list2);
// Tuple
const tuple = ['Hello', 20, "world"];
console.log("----------TUPLE----------");
console.log(tuple);
// array of Tuples:
const arrayOfTuples = [
    ['Hello', 20],
    ['World', 30]
];
console.log("----------ARRAY OF TUPLES----------");
console.log(arrayOfTuples);
// push to array of Tuples:
arrayOfTuples.push(['Hola', 40]);
console.log("----------PUSH TO ARRAY OF TUPLES----------");
console.log(arrayOfTuples);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
const c = Color.Green;
console.log("----------ENUM----------");
console.log(c);
// Generics
const genericFunction = (arg) => {
    return arg;
};
console.log("----------GENERICS----------");
console.log(genericFunction('Hello'));
// Union
const unionFunction = (arg) => {
    return arg;
};
console.log("----------UNION----------");
console.log(unionFunction('Hello'));
console.log(unionFunction(20));
const typeAliasFunction = (arg) => {
    return arg;
};
console.log("----------TYPE ALIAS----------");
console.log(typeAliasFunction('Hello'));
console.log(typeAliasFunction(20));
const David = {
    name: 'David',
    age: 20,
    // location: "San Francisco"
};
console.log(David);
const davidsPet = "dog";
// const manchaya:Pet = "gerbil"
// unknown
let unknownVar = 20;
unknownVar = 'Hello';
console.log(unknownVar);
// we can assign unknown to any type but not vice versa, ex:
let unknownVar2 = 20;
let stringVar = unknownVar2;
console.log(stringVar);
// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('John', 20);
console.log(person);
const personInterface = {
    name: 'John',
    age: 20
};
console.log(personInterface);
// Type Assertion
const typeAssertionVar = 'Hello';
const typeAssertionVar2 = typeAssertionVar.toUpperCase();
console.log(typeAssertionVar2);
// Functions
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));
// Optional Parameters
const add2 = (a, b) => {
    return b ? a + b : a;
};
console.log(add2(1));
// Default Parameters
const add3 = (a, b = 10) => {
    return a + b;
};
console.log(add3(1));
const personInterface2 = {
    name: 'John',
    greet() {
        return 'Hello';
    }
};
// Classes
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return 'Hello';
    }
}
const person2 = new Person2('John', 20);
console.log(person2);
