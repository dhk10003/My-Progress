// values:
const string = "This is my string"
const arr =["Hi", "Hello", "Hey"]
const num = 100
let emptyString = ""

emptyString = "This is not empty anymore"
console.log(emptyString)
// Lengths:
const length = string.length
const arrLength = arr.length

// string literal:
console.log("This is a string literal")

// number literal:
console.log(100)

// object example:
const obj = {
    // Properties: (variables of an object, separated by commas)
    // we use a colon to assign a value to a property or method, but the value of a method has to be a function
    name: "John",
    age: 30,
    isMarried: false,
    // This is a method: (a function of an object)
    sayHello: function(){
        console.log("Hello")
    }
}


// we access properties and methods of an object using "dot notation":
console.log(obj.name)
console.log(obj.age)
console.log(obj.isMarried)

obj.sayHello()

console.log(typeof obj.sayHello)