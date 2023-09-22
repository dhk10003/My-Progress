/*  HELLO AND WELCOME TO GENERICS!!!

I'm making some super bad ass notes for you guys!

const last: This is the declaration of a constant variable named "last." It is a function.

    <T>: This is a type parameter declaration. It defines a type variable T, 
    which represents a placeholder for a type that will be provided when the function is called. 
    T is a common convention for type parameters, but you can use any valid identifier as a type parameter name.

    (arr: T[]): T: This is the function's parameter list and return type annotation. 
    It specifies that the last function takes an array (arr) of elements of type T 
    and returns an element of the same type T.

    =>: This arrow indicates that you're defining an arrow function.

    arr[arr.length - 1]: This is the function's body. It returns the last element of the input array arr. 
    The type of the returned element is T, as specified in the return type annotation.

    By using the <T> type parameter, you make the last function generic, 
    which means it can work with arrays of different types. When you call this function, 
    TypeScript will infer or allow you to specify the actual type that T should represent. For example:

*/

const last = <T>(arr: T[]): T => arr[arr.length - 1];

// Typescript is infering the return type of the function (T)
// we could explicitly specify the type of T, using the following syntax:
// const last = <T>(arr: T[]): T => arr[arr.length - 1];

const lastString = last(["a", "b", "c"]);
const lastNumber = last([1, 2, 3]);
// notice, we can use any type in our array, and the function will return the last element of that array!!!
const lastString2 = last<string>(["a", "b", "c"]); // here we explicitly specify the type of T
console.log(lastString);
console.log(lastNumber);
console.log(lastString2);

// Generic function used to create a union array:
const makeArr = <X, Y>(x: X, y: Y) => [x, y];
const v = makeArr(5, 6);
const v2 = makeArr<string, string>("a", "b");//specifying types explicitly
const v3 = makeArr("a", 5);
console.log(v);
console.log(v2);
console.log(v3);

// Generic funciton used to create a tuple: notice how we explicitly specify the return type ([X,Y]) - a tuple
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const v4 = makeTuple(5, 6);
// in the following example, the first argument can be either a string or null, and the second argument can only be a string
const v5 = makeTuple<string | null, string>("a", "b");//we can specify types explicitly, 
//and use | operator to create another union type for one of the types, or both if we want, as long as we separate
// each argument type(s) with a comma
const v6 = makeTuple("a", 5);
console.log(v4);
console.log(v5);
console.log(v6);

// let's do the same thing as above, but let's look at using a default type:
const makeTuple2 = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
// now, if we don't specify the type of Y, it will default to number
const v7 = makeTuple2<string | null>("a", 5);
console.log(v7);
// as you can see, the type of Y is number, because we didn't specify it, and it defaulted to number!  Cool!
// Look how smart you're getting.  You're a regular old, I mean YOUNG Einstein!
// ...moving on...

// The following function will take an object, keep all the properties of that object, and adds 2 new properties to it
// it expects an object with a firstName and lastName property, and it returns an object with those properties, plus
// a fullName property, and a nameLength property.

// here we want to constrain the object so that is has at least a firstName and lastName property
const makeFullname = (obj: { firstName: string; lastName: string }) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    };
}
const v8 = makeFullname({ firstName: "John", lastName: "Doe" });
console.log(v8);
// if this object didn't have a firstName or lastName property, we would get an error
// also, if this object had other properties, these properties would be lost, because we are spreading the object,
// meaning the only properties that will be in the new object are the ones we specify

// but what if this object has other properties, and we want to keep those properties, and add the new properties?
// like age, or height, or weight, or whatever?  Well, we can do that with generics!

// here we are saying that the object can have any properties, as long as it has a firstName and lastName property
// this syntax is saying that the object must have a firstName and lastName property, and it can have any other properties of any type,
// because the object is generic, and we don't know what other properties it might have, or what type they might be!
// The object itself is generic!  meaning it can be any type of object, as long as it has a firstName and lastName property!!!

const makeFullname2 = <T extends { firstName: string; lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    };
}
const v9 = makeFullname2({ firstName: "John", lastName: "Doe", age: 45 });
console.log(v9);

// the following code is an example of how to use generics to create a tab interface
// The tab being a tab in a browser, or a tab in a spreadsheet, or a tab in a word document, or whatever
// we are saying that the Tab interface can be any type of object, and it must have an id, a position, and some data
// the id must be a string, the position must be a number, and the data can be any type of object
// this is a great example of how to use generics to create a reusable interface

// because we are making the Tab interface itself, generic, we can use it to create tabs of any type of object
// the id must be a string, the position must be a number, and the data can be any type!
interface Tab<T> {
    id: string;
    position: number;
    data: T;
}
// here we are creating a tab of type string
const tab1: Tab<string> = {
    id: "1",
    position: 1,
    data: "Hello"
}
// here we are creating a tab of type number
const tab2: Tab<number> = {
    id: "2",
    position: 2,
    data: 123
}
// here we are creating a tab of type object
const tab3: Tab<object> = {
    id: "3",
    position: 3,
    data: { name: "John", age: 45 }
}

// this code is coming from the typescript docs, and it's a great example of how to use generics!