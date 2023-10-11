# <center>JAVASCRIPT RECAP</center>

# JavaScript Variables and Data Types

## Introduction

JavaScript is a versatile programming language that allows you to work with various data types and manipulate data using variables. In this class, we will explore JavaScript variables and common data types to help you get started with the language.

## Variables

Variables in JavaScript are used to store and manage data. They act as containers for values, allowing you to reference and manipulate data throughout your code.

### Declaring Variables

In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`.

- `var`: Declares a variable globally or within a function scope. It has been largely replaced by `let` and `const` in modern JavaScript.
- `let`: Declares a block-scoped variable that can be reassigned.
- `const`: Declares a block-scoped variable that cannot be reassigned after initialization.

Example:

```js
let age = 25; // Declaring a variable named 'age' with a value of 25
const name = "John"; // Declaring a constant variable named 'name' with a value of "John"
```

### Variable Naming Rules

- Variable names can contain letters, digits, underscores, and dollar signs.
- They must start with a letter, underscore, or dollar sign (not a digit).
- Variable names are case-sensitive.
- Reserved words (e.g., `if`, `else`, `function`) cannot be used as variable names.

### Data Types

JavaScript supports several data types:

#### 1. Primitive Data Types

- **Number**: Represents numeric values (integers and floating-point numbers).
- **String**: Represents text or character data enclosed in single (' ') or double (" ") quotes.
- **Boolean**: Represents true or false values.
- **Undefined**: Represents a variable that has been declared but hasn't been assigned a value.
- **Null**: Represents the intentional absence of any value or object.
- **Symbol** (ES6): Represents a unique and immutable value, often used as object property keys.

#### 2. Reference Data Types

- **Object**: Represents a collection of key-value pairs. Objects can be used to group related data and functions.
- **Array**: Represents an ordered list of values, often of the same data type, stored in square brackets (`[]`).
- **Function**: Represents reusable blocks of code.

Example:

```js
let age = 25; // Number
let name = "John"; // String
let isStudent = true; // Boolean
let person = null; // Null
let car; // Undefined
let uniqueSymbol = Symbol("description"); // Symbol
let user = { firstName: "Alice", lastName: "Johnson" }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() {
  console.log("Hello!");
} // Function
```

## Type Coercion

JavaScript can automatically convert data types in certain situations. This is known as type coercion. For example, you can perform operations between different data types, and JavaScript will attempt to convert them as needed.

```js
let num = 5 + "5"; // "55" (string concatenation)
let result = 10 - "5"; // 5 (numeric subtraction)
```

## Conclusion

Understanding variables and data types is fundamental in JavaScript programming. These concepts serve as the building blocks for more complex operations and data manipulation in your JavaScript code. As you continue learning, you'll discover how to work with these variables and data types effectively in various programming scenarios.

<hr>
<hr>

# JavaScript Operators

## Introduction

Operators in JavaScript are symbols or keywords used to perform operations on values and variables. They allow you to manipulate data, perform calculations, and make decisions in your code. In this class, we will explore the different types of operators in JavaScript.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

- **Addition (+)**: Adds two numbers.
- **Subtraction (-)**: Subtracts the right operand from the left operand.
- **Multiplication (\*)**: Multiplies two numbers.
- **Division (/)**: Divides the left operand by the right operand.
- **Modulus (%)**: Returns the remainder of dividing the left operand by the right operand.

```js
let a = 10;
let b = 5;

let sum = a + b; // 15
let difference = a - b; // 5
let product = a * b; // 50
let quotient = a / b; // 2
let remainder = a % b; // 0
```

## Assignment Operators

Assignment operators are used to assign values to variables.

- **Assignment (=)**: Assigns a value to a variable.
- **Addition Assignment (+=)**: Adds the right operand to the variable and assigns the result to the variable.
- **Subtraction Assignment (-=)**: Subtracts the right operand from the variable and assigns the result to the variable.
- **Multiplication Assignment (\*=)**: Multiplies the variable by the right operand and assigns the result to the variable.
- **Division Assignment (/=)**: Divides the variable by the right operand and assigns the result to the variable.

```js
let x = 5;

x += 3; // x is now 8
x -= 2; // x is now 6
x *= 4; // x is now 24
x /= 3; // x is now 8
```

## Comparison Operators

Comparison operators are used to compare values.

- **Equal (==)**: Checks if two values are equal.
- **Not Equal (!=)**: Checks if two values are not equal.
- **Strict Equal (===)**: Checks if two values are equal in value and data type.
- **Strict Not Equal (!==)**: Checks if two values are not equal in value or data type.
- **Greater Than (>)**: Checks if the left operand is greater than the right operand.
- **Less Than (<)**: Checks if the left operand is less than the right operand.
- **Greater Than or Equal To (>=)**: Checks if the left operand is greater than or equal to the right operand.
- **Less Than or Equal To (<=)**: Checks if the left operand is less than or equal to the right operand.

```js
let p = 10;
let q = 5;

p == q; // false
p != q; // true
p === q; // false
p !== q; // true
p > q; // true
p < q; // false
p >= q; // true
p <= q; // false
```

## Logical Operators

Logical operators are used to perform logical operations.

- **Logical AND (&&)**: Returns true if both operands are true.
- **Logical OR (||)**: Returns true if at least one operand is true.
- **Logical NOT (!)**: Returns the opposite of the operand's truthiness.

```js
let isTrue = true;
let isFalse = false;

isTrue && isFalse; // false
isTrue || isFalse; // true
!isTrue; // false
```

## Conditional (Ternary) Operator

The conditional operator is a shorthand way to write an `if...else` statement.

```js
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";

// If age is 18 or older, status will be "Adult"; otherwise, it will be "Minor".
```

## Conclusion

Understanding JavaScript operators is crucial for performing various operations in your code. These operators allow you to manipulate data, make decisions, and control the flow of your programs. As you gain experience with JavaScript, you will use these operators extensively to build complex applications.

<hr>

<hr>

# JavaScript Loops

## Introduction

Loops are essential constructs in JavaScript (and most programming languages) that allow you to execute a block of code repeatedly. They help automate repetitive tasks and process collections of data. In this class, we will explore three common types of loops in JavaScript: `for`, `while`, and `do...while`.

## `for` Loop

The `for` loop is used to execute a block of code a specified number of times.

```js
for (initialization; condition; increment / decrement) {
  // Code to be executed
}
```

- Initialization: Initializes a variable (often a counter) before the loop starts.
- Condition: Specifies the condition for the loop to continue executing.
- Increment/Decrement: Updates the variable on each iteration.

Example:

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
```

## `while` Loop

The `while` loop is used to execute a block of code as long as a specified condition is true.

```js
while (condition) {
  // Code to be executed
}
```

Example:

```js
let count = 0;

while (count < 5) {
  console.log("Count is " + count);
  count++;
}
```

## `do...while` Loop

The `do...while` loop is similar to the `while` loop but guarantees that the code block will execute at least once before checking the condition.

```js
do {
  // Code to be executed
} while (condition);
```

Example:

```js
let num = 5;

do {
  console.log("Number is " + num);
  num--;
} while (num > 0);
```

## Loop Control Statements

JavaScript provides loop control statements to modify the flow of loops:

- `break`: Exits the loop prematurely.
- `continue`: Skips the current iteration and proceeds to the next.
- `return`: Exits the entire function, not just the loop (if used within a function).

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exits the loop when i is 3
  }
  console.log("Iteration " + i);
}
```

## Nested Loops

You can nest loops inside one another to work with multi-dimensional data structures or perform complex iterations.

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log("i: " + i + ", j: " + j);
  }
}
```

## Conclusion

Loops are fundamental for repetitive tasks and iterating over data in JavaScript. Understanding how to use `for`, `while`, and `do...while` loops, along with loop control statements, is crucial for building efficient and powerful JavaScript programs. Practice and experimentation will help you master the art of looping.

<hr>

<hr>

# JavaScript Functions

## Introduction

Functions are a fundamental concept in JavaScript and most programming languages. They allow you to encapsulate a block of code, give it a name, and reuse it throughout your program. Functions make your code more modular, readable, and maintainable. In this class, we will explore JavaScript functions in detail.

## Function Declaration

A function in JavaScript is defined using the `function` keyword.

```js
function functionName(parameters) {
  // Code to be executed
}
```

- `functionName`: The name of the function.
- `parameters` (optional): Input values that the function can accept.

Example:

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice"); // Output: Hello, Alice!
```

## Function Expression

You can also define functions as expressions and assign them to variables.

```js
const functionName = function (parameters) {
  // Code to be executed
};
```

Example:

```js
const square = function (x) {
  return x * x;
};

// Calling the function expression
const result = square(5); // result is now 25
```

## Arrow Functions (ES6)

Arrow functions provide a more concise way to write functions, especially for simple one-liner functions.

```js
const functionName = (parameters) => {
  // Code to be executed
};
```

Example:

```js
const double = (x) => x * 2;

// Calling the arrow function
const result = double(7); // result is now 14
```

## Function Parameters and Arguments

Parameters are variables that are declared in a function's definition, while arguments are the values passed when calling the function.

```js
function add(a, b) {
  return a + b;
}

const sum = add(3, 5); // a=3, b=5
```

## Return Statement

Functions can return values using the `return` statement. A function can return only one value, but this value can be of any data type, including objects and arrays.

```js
function multiply(x, y) {
  return x * y;
}

const result = multiply(4, 6); // result is now 24
```

## Scope

JavaScript functions have their own scope, which means variables declared inside a function are local to that function and not accessible from outside.

```js
function example() {
  const localVar = "I'm local!";
  console.log(localVar);
}

console.log(localVar); // This will result in an error because localVar is not defined in this scope.
```

## Function Hoisting

In JavaScript, function declarations are hoisted to the top of their containing scope, which means you can call a function before its declaration in the code.

```js
hoisted(); // This works even though the function is declared later in the code.

function hoisted() {
  console.log("I was hoisted!");
}
```

## Immediately Invoked Function Expressions (IIFE)

An IIFE is a function expression that is defined and executed immediately after its creation. It is often used to create a private scope for variables, preventing them from polluting the global scope.

```js
(function () {
  // Code to be executed
})();
```

Example:

```js
(function () {
  const secretMessage = "This is private!";
  console.log(secretMessage);
})();
```

IIFE is useful when you want to avoid naming conflicts and keep your code modular and self-contained.

## Conclusion

Functions, whether declared traditionally, as expressions, or as arrow functions, are essential in JavaScript for organizing and reusing code. Additionally, IIFE provides a way to create self-contained code blocks with their own scope. Understanding these concepts is fundamental for effective JavaScript development.

<hr><hr>

# JavaScript Strings and String Methods

## Introduction

Strings are a fundamental data type in JavaScript used to represent text or sequences of characters. In this class, we will explore JavaScript strings and some of the commonly used string methods for manipulating and working with text data.

## Creating Strings

You can create strings in JavaScript by enclosing text in single (`'`) or double (`"`) quotes.

```js
let singleQuotes = "This is a string.";
let doubleQuotes = "This is also a string.";
```

## String Properties

Strings have several properties, such as `length`, which gives the number of characters in a string.

```js
let message = "Hello, world!";
console.log(message.length); // Outputs: 13
```

## String Methods

### 1. Concatenation

You can concatenate strings using the `+` operator or the `concat()` method.

```js
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // Using the + operator
let anotherFullName = firstName.concat(" ", lastName); // Using the concat() method
```

### 2. Accessing Characters

You can access individual characters in a string using square brackets `[]`.

```js
let greeting = "Hello, world!";
let firstCharacter = greeting[0]; // 'H'
```

### 3. Substrings

To extract a portion of a string, use `substring(startIndex, endIndex)` or `slice(startIndex, endIndex)`.

```js
let text = "This is a sample text.";
let substring = text.substring(5, 11); // "is a s"
let sliced = text.slice(5, 11); // "is a s"
```

### 4. Searching

- `indexOf(substring)`: Returns the index of the first occurrence of a substring in the string. Returns -1 if not found.
- `lastIndexOf(substring)`: Returns the index of the last occurrence of a substring in the string. Returns -1 if not found.

```js
let sentence = "The quick brown fox jumps over the lazy dog.";

let firstFox = sentence.indexOf("fox"); // 16
let lastFox = sentence.lastIndexOf("fox"); // 16
```

### 5. Changing Case

- `toUpperCase()`: Converts the string to uppercase.
- `toLowerCase()`: Converts the string to lowercase.

```js
let message = "Hello, World!";
let upperCaseMessage = message.toUpperCase(); // "HELLO, WORLD!"
let lowerCaseMessage = message.toLowerCase(); // "hello, world!"
```

### 6. Trimming

- `trim()`: Removes whitespace from both ends of the string.

```js
let textWithSpaces = "   This is a string with spaces.   ";
let trimmedText = textWithSpaces.trim(); // "This is a string with spaces."
```

### 7. Splitting and Joining

- `split(separator)`: Splits a string into an array of substrings based on a specified separator.
- `join(separator)`: Joins elements of an array into a string using a specified separator.

```js
let fruits = "apple,banana,kiwi";
let fruitArray = fruits.split(","); // ["apple", "banana", "kiwi"]
let joinedFruits = fruitArray.join(" and "); // "apple and banana and kiwi"
```

### 8. Replace

- `replace(oldValue, newValue)`: Replaces occurrences of `oldValue` with `newValue` in the string.

```js
let sentence = "I love JavaScript!";
let newSentence = sentence.replace("JavaScript", "programming"); // "I love programming!"
```

## Conclusion

JavaScript strings are versatile for working with text data. By using the string methods mentioned here, you can manipulate and transform strings to meet the needs of your application. These methods are essential tools for any JavaScript developer when dealing with text-based data and user interfaces.

<hr><hr>

# JavaScript Arrays and Array Methods

## Introduction

Arrays are a fundamental data structure in JavaScript used to store and manipulate collections of data. In this class, we will explore JavaScript arrays and some of the commonly used array methods for working with lists of elements.

## Creating Arrays

You can create arrays in JavaScript using square brackets `[]`.

```js
let fruits = ["apple", "banana", "cherry"];
```

## Array Properties

Arrays have several properties, including `length`, which represents the number of elements in the array.

```js
let colors = ["red", "green", "blue"];
console.log(colors.length); // Outputs: 3
```

## Accessing Array Elements

You can access elements in an array using square brackets and the element's index. Remember that array indices start at 0.

```js
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits[0]; // "apple"
```

## Common Array Methods

### 1. Adding and Removing Elements

- `push(element)`: Adds an element to the end of the array.
- `pop()`: Removes and returns the last element from the array.

```js
let numbers = [1, 2, 3];
numbers.push(4); // numbers is now [1, 2, 3, 4]
let removed = numbers.pop(); // removed is 4, numbers is [1, 2, 3]
```

### 2. Modifying Elements

- `splice(startIndex, deleteCount, item1, item2, ...)`: Adds or removes elements at the specified index.

```js
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi"); // Replace "banana" with "kiwi", fruits is now ["apple", "kiwi", "cherry"]
```

### 3. Iterating Through Arrays

- `forEach(callbackFunction)`: Executes a provided function once for each array element.

```js
let numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number);
});
// Outputs:
// 1
// 2
// 3
```

### 4. Filtering Arrays

- `filter(callbackFunction)`: Creates a new array with elements that pass a test.

```js
let ages = [18, 25, 12, 35, 30];
let adults = ages.filter(function (age) {
  return age >= 18;
});
// adults is [18, 25, 35, 30]
```

### 5. Mapping Arrays

- `map(callbackFunction)`: Creates a new array with the results of applying a function to each element.

```js
let numbers = [1, 2, 3];
let squares = numbers.map(function (number) {
  return number * number;
});
// squares is [1, 4, 9]
```

### 6. Reducing Arrays

- `reduce(callbackFunction, initialValue)`: Applies a function against an accumulator and each element to reduce the array to a single value.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 10
```

### 7. Concatenating Arrays

- `concat(array1, array2, ...)`: Combines two or more arrays.

```js
let colors1 = ["red", "green"];
let colors2 = ["blue", "yellow"];
let allColors = colors1.concat(colors2);
// allColors is ["red", "green", "blue", "yellow"]
```

### 8. Checking for Elements

- `includes(element)`: Determines whether an array includes a certain element.
- `indexOf(element)`: Returns the first index at which a given element can be found in the array.

```js
let fruits = ["apple", "banana", "cherry"];
fruits.includes("banana"); // true
fruits.indexOf("kiwi"); // -1 (not found)
```

## Conclusion

JavaScript arrays and their methods provide powerful tools for working with collections of data. Understanding how to create, access, and manipulate arrays, as well as how to use array methods, is essential for effective JavaScript programming, especially when dealing with lists of elements or data sets.

<hr><hr>

# JavaScript Objects and Object Methods

## Introduction

Objects are a fundamental data structure in JavaScript, used to represent and store collections of key-value pairs. In this class, we will explore JavaScript objects and some of the commonly used object methods for working with and manipulating data.

## Creating Objects

You can create objects in JavaScript using curly braces `{}`.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
```

## Accessing Object Properties

You can access properties of an object using dot notation or bracket notation.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
```

## Adding and Modifying Properties

You can add new properties or modify existing ones in an object.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

person.age = 30; // Adding a new property
person.lastName = "Smith"; // Modifying an existing property
```

## Common Object Methods

### 1. Object.keys()

- `Object.keys(object)`: Returns an array of a given object's own property names (keys).

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let keys = Object.keys(person); // ["firstName", "lastName", "age"]
```

### 2. Object.values()

- `Object.values(object)`: Returns an array of a given object's own property values.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let values = Object.values(person); // ["John", "Doe", 30]
```

### 3. Object.entries()

- `Object.entries(object)`: Returns an array of a given object's own enumerable property `[key, value]` pairs.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let entries = Object.entries(person);
// [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
```

### 4. Object.assign()

- `Object.assign(target, source1, source2, ...)`: Copies the values of all enumerable properties from one or more source objects to a target object.

```js
let person = {
  firstName: "John",
};

let details = {
  lastName: "Doe",
  age: 30,
};

Object.assign(person, details);
// person is now { firstName: "John", lastName: "Doe", age: 30 }
```

### 5. Object.hasOwnProperty()

- `object.hasOwnProperty(key)`: Returns a boolean indicating whether the object has the specified property.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

let hasAge = person.hasOwnProperty("age"); // false
```

## Conclusion

JavaScript objects are versatile for organizing and storing data in key-value pairs. By using object properties and the methods mentioned here, you can manipulate and transform objects to meet the needs of your application. Understanding these concepts is essential for effective JavaScript programming, especially when dealing with structured data and complex data structures.

<hr><hr>

# JavaScript Objects and Arrays: Spread, Rest Operator, and Destructuring

## Introduction

JavaScript provides powerful tools for working with objects and arrays, including features like the spread operator, rest operator, and destructuring. In this class, we will explore these concepts in detail and learn how they can simplify code and make it more concise.

## Spread Operator (Arrays and Objects)

### 1. Arrays

The spread operator (`...`) allows you to create a new array by copying the elements of an existing array. It's useful for combining arrays or making shallow copies.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// arr2 is now [1, 2, 3, 4, 5]
```

### 2. Objects

Similarly, the spread operator can be used to create a new object by copying the properties of an existing object.

```js
const obj1 = { name: "Alice", age: 30 };
const obj2 = { ...obj1, city: "New York" };

// obj2 is now { name: "Alice", age: 30, city: "New York" }
```

## Rest Operator (Function Parameters)

The rest operator (`...`) allows you to represent an indefinite number of arguments as an array. It is commonly used in function parameters to handle variable-length argument lists.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5); // result is 15
```

## Destructuring (Arrays and Objects)

### 1. Arrays

Destructuring allows you to extract values from arrays and assign them to variables easily.

```js
const [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2
```

### 2. Objects

With object destructuring, you can extract properties and assign them to variables with the same name.

```js
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

console.log(firstName); // "John"
console.log(lastName); // "Doe"
```

You can also assign variables with different names by using aliases:

```js
const { firstName: first, lastName: last } = person;

console.log(first); // "John"
console.log(last); // "Doe"
```

## Combining Techniques

You can use these concepts together to make your code more concise and readable. For example:

```js
// Combining spread, rest, and destructuring
function processUser({ name, age, ...rest }) {
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
```

## Conclusion

The spread operator, rest operator, and destructuring are powerful tools in JavaScript for working with arrays, objects, and function parameters. They enable you to write cleaner, more concise code and handle complex data structures with ease. Understanding these concepts is essential for advanced JavaScript programming.

<hr><hr>

# JavaScript Closures

## Introduction

Closures are a fundamental and powerful concept in JavaScript. They occur when a function "closes over" its lexical scope, preserving access to variables and functions even after the outer function has finished executing. In this class, we will explore JavaScript closures and understand how they work.

## Lexical Scope

To understand closures, you first need to grasp the concept of lexical scope. Lexical scope means that the inner functions can access variables and functions defined in their outer (enclosing) functions.

```js
function outer() {
  const x = 10;

  function inner() {
    console.log(x); // Inner function can access 'x' from the outer function
  }

  inner();
}

outer();
```

## Closure Basics

A closure is created when an inner function is returned from an outer function and still has access to the outer function's variables and scope.

```js
function outer() {
  const x = 10;

  function inner() {
    console.log(x); // Inner function forms a closure over 'x'
  }

  return inner; // Return the inner function
}

const closureFunction = outer();
closureFunction(); // Accesses and logs 'x' (outputs 10)
```

## Practical Use Cases

### 1. Data Encapsulation and Privacy

Closures are often used to create private variables and methods, hiding implementation details from the outside world.

```js
function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counterInstance = counter();
counterInstance.increment();
console.log(counterInstance.getCount()); // Accesses the count variable (outputs 1)
```

### 2. Callbacks and Event Handling

Closures are commonly used in callbacks and event handling to maintain context and access outer variables.

```js
function setupClickEvent() {
  const message = "Button clicked!";

  document.getElementById("myButton").addEventListener("click", function () {
    alert(message); // Accesses 'message' from the outer function
  });
}

setupClickEvent();
```

## Memory Management

While closures are powerful, they can also lead to memory management issues if not handled properly. When a function forms a closure over external variables, those variables won't be garbage collected as long as the closure exists, which can cause memory leaks.

To mitigate this, it's important to be mindful of how and when closures are created, and ensure that they are released when no longer needed.

## Conclusion

Closures are a core concept in JavaScript that enables various programming techniques, such as data encapsulation, callback functions, and maintaining context. Understanding how closures work and their practical use cases is crucial for becoming a proficient JavaScript developer.

<hr><hr>

# JavaScript Currying

## Introduction

Currying is a functional programming technique in JavaScript that involves breaking down a function that takes multiple arguments into a series of functions, each taking a single argument. It allows you to transform a function with multiple parameters into a sequence of unary (single-argument) functions. In this class, we will explore JavaScript currying and understand how it works.

## Basic Currying Example

Consider a simple addition function that takes two arguments:

```js
function add(x, y) {
  return x + y;
}
```

In a curried form, this function would be transformed into a series of unary functions:

```js
function curriedAdd(x) {
  return function (y) {
    return x + y;
  };
}
```

With this curried version, you can now create partially applied functions by calling `curriedAdd` with one argument at a time:

```js
const add5 = curriedAdd(5);
const result = add5(3); // result is 8
```

## Benefits of Currying

### 1. Partial Application

Currying enables partial application, which allows you to fix a subset of the arguments to create new functions. This can be useful when you need to reuse a function with some arguments pre-set.

```js
const add5 = curriedAdd(5);

const result1 = add5(3); // result1 is 8
const result2 = add5(7); // result2 is 12
```

### 2. Function Composition

Currying can be used in function composition to build complex operations by chaining together simpler functions.

```js
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const add5 = curriedAdd(5);
const multiplyBy2 = multiply(2);

const composedFunction = multiplyBy2(add5);
const result = composedFunction(3); // result is 16
```

### 3. Flexibility and Reusability

Curried functions are more flexible and can be reused in various contexts with different arguments, promoting code reusability.

## Implementing Currying

You can implement currying manually, as shown in the examples above. However, there are libraries and helper functions available in JavaScript, such as Lodash's `curry`, that simplify the process.

```js
const _ = require("lodash");

function add(x, y) {
  return x + y;
}

const curriedAdd = _.curry(add);

const add5 = curriedAdd(5);
const result = add5(3); // result is 8
```

## Conclusion

Currying is a functional programming technique that can make your code more modular, flexible, and expressive. It allows you to create reusable functions, perform partial application, and build complex operations by composing simpler ones. Understanding and using currying can enhance your ability to write clean and maintainable JavaScript code.

<hr><hr>

# JavaScript Asynchronous Programming

## Introduction

JavaScript is a single-threaded language, which means it processes one task at a time. However, it has a non-blocking, event-driven architecture that allows it to handle asynchronous operations efficiently. Asynchronous programming is crucial for dealing with tasks like network requests, file I/O, and timers without blocking the main thread. In this class, we will explore JavaScript asynchronous programming and the mechanisms used for handling asynchronous tasks.

## Asynchronous JavaScript Patterns

### 1. Callbacks

Callbacks are functions that are passed as arguments to other functions and executed once an asynchronous operation completes.

```js
function fetchData(url, callback) {
  // Simulate an asynchronous network request
  setTimeout(function () {
    const data = "Some data from the server";
    callback(data);
  }, 1000);
}

fetchData("https://example.com/api/data", function (data) {
  console.log(data);
});
```

Callback hell (or "callback pyramid") can occur when dealing with multiple nested callbacks, making the code harder to read and maintain.

### 2. Promises

Promises provide a cleaner way to work with asynchronous operations, allowing you to handle success and error cases separately. A Promise represents a future value and can be in one of three states: pending, resolved (fulfilled), or rejected.

```js
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    // Simulate an asynchronous network request
    setTimeout(function () {
      const data = "Some data from the server";
      resolve(data); // Resolve the Promise with data
      // or reject with an error: reject("An error occurred");
    }, 1000);
  });
}

fetchData("https://example.com/api/data")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

Promises help mitigate callback hell by allowing you to chain `.then()` handlers.

### 3. `async`/`await`

The `async` and `await` keywords introduced in modern JavaScript provide a more readable and synchronous-like way to work with Promises. An `async` function returns a Promise, and `await` is used to pause the execution until a Promise is resolved.

```js
async function fetchData(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = "Some data from the server";
      resolve(data);
    }, 1000);
  });
}

async function process() {
  try {
    const data = await fetchData("https://example.com/api/data");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

process();
```

`async`/`await` simplifies asynchronous code, making it look more like traditional synchronous code.

## Event Loop

The event loop is a core concept in JavaScript's asynchronous model. It continuously checks the message queue for pending events and processes them in a non-blocking manner. This enables JavaScript to handle multiple tasks concurrently while keeping the main thread free for user interactions.

## Conclusion

Asynchronous programming is essential for JavaScript to handle tasks like network requests, timers, and I/O efficiently without blocking the main thread. Understanding and mastering asynchronous patterns, such as callbacks, Promises, and `async`/`await`, is crucial for writing responsive and scalable JavaScript applications.

<hr><hr>

# JavaScript Debounce and Throttling

## Introduction

Debouncing and throttling are two important techniques in JavaScript for controlling the execution of functions in response to events, particularly when dealing with frequent events like scrolling, resizing, or typing. These techniques help optimize performance and reduce the risk of excessive function calls. In this class, we will explore debounce and throttling in JavaScript.

## Debouncing

### Definition

Debouncing is a technique that delays the execution of a function until a certain amount of time has passed since the last occurrence of an event.

### Use Cases

- Typing in a search bar where you want to perform a search after the user has stopped typing.
- Resizing a window where you want to execute code after the user has finished resizing.

### Implementation

```js
function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

// Usage
const debouncedFunction = debounce(function () {
  // Your code to be executed after a delay
}, 300);
```

## Throttling

### Definition

Throttling is a technique that limits the execution of a function to a specified time interval. It ensures that a function can be executed at most once per interval.

### Use Cases

- Scrolling in a web page where you want to update an element periodically without overloading the browser with updates.
- Mousemove or touchmove events where you want to limit the frequency of updates.

### Implementation

```js
function throttle(func, delay) {
  let canExecute = true;

  return function () {
    if (canExecute) {
      func.apply(this, arguments);
      canExecute = false;
      setTimeout(function () {
        canExecute = true;
      }, delay);
    }
  };
}

// Usage
const throttledFunction = throttle(function () {
  // Your code to be executed at a limited frequency
}, 300);
```

## Comparison

- Debouncing delays execution until a certain time has passed since the last event, while throttling limits execution to a specified time interval.
- Debouncing is typically used when you want to ensure that a function is executed only after a pause in events, while throttling is used when you want to limit the frequency of execution.

## Conclusion

Debouncing and throttling are essential techniques in JavaScript to control the execution of functions in response to frequent events. By applying these techniques, you can optimize the performance of your applications and create a more responsive user experience. Understanding when and how to use debouncing and throttling is valuable for front-end development.
