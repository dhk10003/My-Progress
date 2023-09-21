// type annotation:

// TS data types:
// string, number, boolean, null, undefined, any, void, never, Array, Tuple, Enum, Generics, Union, Intersection, Type Alias, Class, Interface, Type Assertion

// string
const message : string = 'Hello World';
console.log(message);

// number
const age : number = 30;
console.log(age);

// boolean
const isLogged : boolean = true;
console.log(isLogged);

// null
const nullVar : null = null;

// undefined
const undefinedVar : undefined = undefined;

// any
let anyVar : any = 'Hello';
anyVar = 20;
anyVar = true;
console.log(anyVar);

// void
const voidVar : void = undefined;
console.log(voidVar);

// never
const error = (message: string): never => {
    throw new Error(message);
}

// Array
const list1 : number[] = [1, 2, 3];
const list2 : Array<number> = [1, 2, 3];
console.log(list1);
console.log(list2);

// Tuple
const tuple : [string, number, string] = ['Hello', 20, "world"];
console.log("----------TUPLE----------")
console.log(tuple);

// array of Tuples:
const arrayOfTuples : [string, number][] = [
    ['Hello', 20],
    ['World', 30]
];
console.log("----------ARRAY OF TUPLES----------")
console.log(arrayOfTuples);

// push to array of Tuples:
arrayOfTuples.push(['Hola', 40]);
console.log("----------PUSH TO ARRAY OF TUPLES----------")
console.log(arrayOfTuples);

// Enum
enum Color {Red, Green, Blue};
const c : Color = Color.Green;
console.log("----------ENUM----------")
console.log(c);

// Generics
const genericFunction = <T>(arg: T): T => {
    return arg;
}
console.log("----------GENERICS----------")
console.log(genericFunction<string>('Hello'));

// Union
const unionFunction = (arg: string | number | boolean): string | number | boolean => {
    return arg;
}
console.log("----------UNION----------")
console.log(unionFunction('Hello'));
console.log(unionFunction(20));

// Intersection
// const intersectionFunction = <T, U>(arg1: T, arg2: U): T & U => {
//     return Object.assign(arg1, arg2);
// }
// console.log("----------INTERSECTION----------")
// console.log(intersectionFunction({name: 'John'}, {age: 20}));

// Type Alias
type myType = string | number;
const typeAliasFunction = (arg: myType): myType => {
    return arg;
}
console.log("----------TYPE ALIAS----------")
console.log(typeAliasFunction('Hello'));
console.log(typeAliasFunction(20));

type myType2 = {
    name: string;
    age: number;
}

const David: myType2 = {
    name: 'David',
    age: 20,
    // location: "San Francisco"
}

console.log(David);

type Pet = "dog" | "cat" | "bird";
const davidsPet: Pet = "dog";
// const manchaya:Pet = "gerbil"

// unknown
let unknownVar : unknown = 20;
unknownVar = 'Hello';
console.log(unknownVar);

// we can assign unknown to any type but not vice versa, ex:
let unknownVar2 : unknown = 20;
let stringVar : string = unknownVar2 as string;
console.log(stringVar);

// Class
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('John', 20);
console.log(person);

// Interface
interface PersonInterface {
    name: string;
    age: number;
}
const personInterface: PersonInterface = {
    name: 'John',
    age: 20
}
console.log(personInterface);

// Type Assertion
const typeAssertionVar: unknown = 'Hello';
const typeAssertionVar2: string = (typeAssertionVar as string).toUpperCase();
console.log(typeAssertionVar2);

// Functions
const add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(1, 2));

// Optional Parameters
const add2 = (a: number, b?: number): number => {
    return b ? a + b : a;
}
console.log(add2(1));

// Default Parameters
const add3 = (a: number, b: number = 10): number => {
    return a + b;
}
console.log(add3(1));

// Interfaces
interface PersonInterface2 {
    name: string;
    age?: number;
    greet(): string;
}
const personInterface2: PersonInterface2 = {
    name: 'John',
    greet() {
        return 'Hello';
    }
}

// Classes
class Person2 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return 'Hello';
    }
}
const person2 = new Person2('John', 20);
console.log(person2);

