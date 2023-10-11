// Arrays:
// destructing allows us to assign variables from arrays
const [a, b] = [1, 2]
// a = 1
// b = 2


// This is kind of how useState works!  It returns an array!
const useState = () => {
    return [
        "value",
        () => {
            console.log("function")
        }
    ]
}

const [x, y] = useState()// This returns an array, so we can destructure it!
// the first value is the first index of the array, the second value is the second index of the array

console.log(x)
y()

const [first, second, third, fourth] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)

const [one, two, three, four, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(rest)

// object destructuring:

const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
}

const { firstName, lastName, age } = obj
// const firstName = obj.firstName
// const lastName = obj.lastName
// const age = obj.age

// Name our destructured values something different:
const { firstName: firstN, lastName: lastN, age: age2 } = obj
console.log(firstN, lastN, age2)

// Combining spread, rest, and destructuring
function processUser({ name, age, ...rest }) {
    // const name = obj.name
    // const age = obj.age
    // const rest = {city: "New York", isAdmin: true}
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Additional Info: ${JSON.stringify(rest)}`);
}

const user = {
    name: "Alice",
    age: 30,
    city: "London",
    isAdmin: false,
};

processUser(user);

//   --------------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array.length)
console.log(array.split)

const string = "Hello World I am Chase"
console.log(string.length)
let words = string.split(" ")
console.log(words)
console.log(string.split)

const object = {
    name: "John",
    age: 50,
    city: "New York",
    length: 3
}

console.log(object.length)

const number = 1.78435
// console.log(number.length)

