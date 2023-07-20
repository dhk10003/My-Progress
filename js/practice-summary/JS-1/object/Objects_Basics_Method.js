// JS Objects

////////// Object Syntax: Constructor Syntax & Object Literal Syntax

////////// Constructor Syntax:
// Create an object:
// let obj = new Object();
// let obj = {};

////////// Add properties to an object:
// obj.key = value;
// or
// obj["key"] = value;

////////// Accessing properties of an object:
// console.log(obj);
// console.log(obj.key);
// console.log(obj["key"]);

////////// Object Literal Syntax:
// Create an object:
// let obj = {
//     key: value,
//     key: value,
//     key: value,
//     };

////////// Add properties to an object:
// obj.key = value;
// or
// obj["key"] = value;

////////// Accessing properties of an object:
// console.log(obj);
// console.log(obj.key);
// console.log(obj["key"]);

// ---------------------------------------------------------------

////////// Delete properties of an object:
// delete obj.key;
// or
// delete obj["key"];

// ---------------------------------------------------------------

////////// Take variables and values from users and create an object:
// let userName = prompt("Enter your name: "); // John
// let userAge = prompt("Enter your age: "); // 25

// let obj = {
//     name: userName,
//     age: userAge,
// };

// console.log(obj); // {name: "John", age: "25"}
// console.log(obj.name); // John
// console.log(obj.age); // 25

// Practice:
// Ask user a day, and display the working hours for that day.

const workingHours = {
  monday: "9:00 - 17:00",
  tuesday: "10:00 - 17:00",
  wednesday: "11:00 - 16:00",
  thursday: "8:00 - 16:00",
  friday: "9:00 - 18:00",
  saturday: "10:00 - 14:00",
  sunday: "Closed",
};

let day = prompt("Enter a day: ").toLowerCase();

console.log(workingHours[day]);

// ---------------------------------------------------------------

////////// Array / Methods of an object:
// let obj = {
//     key: value,
//     key: value,
//     key: value,
//     array: [value, value, value],
//     method: function() {
//         // code
//     }
//    };

////////// Accessing array / methods of an object:
// console.log(obj.array);
// console.log(obj.array[index]);
// obj.method();

// Practice 1:

const user = {
  email: "dhk10003@gmail.com",
  password: "123456",
  confirmPasswrod: "123456",
  possibleUserRoles: {
    roles: ["admin", "user", "superAdmin"],
  },
  verifyPassword: function () {
    const result = this.password === this.confirmPasswrod ? true : false;
    if (result) {
      return "Password is verified";
    } else {
      return "Password is not verified";
    }
  },
};

console.log(user.verifyPassword()); // Password is verified
console.log(user["verifyPassword"]()); // Password is verified
console.log(user.possibleUserRoles.roles[0]); // admin

// Practice 2:

const person = {
  firstName: "John",
  birthYear: 1990,
  calcAge: function (year) {
    const age = year - this.birthYear;
    this.age = age;
    return age;
  },
};

console.log(person.calcAge(2021)); // 31
console.log(person); // {firstName: "John", birthYear: 1990, calcAge: ƒ, age: 31}

// Practice 3:
// Display last score of Math

const student = {
  name: "Ervin Howell",
  scores: {
    math: [85, 74, 55, 95],
    sience: [77, 88],
  },
  displayLastScoreMath: function () {
    const lastScoreMath = this.scores.math[this.scores.math.length - 1];
    return lastScoreMath;
  },
};

console.log(student.displayLastScoreMath()); // 95

// ---------------------------------------------------------------

////////// Looping through an object:
////////// for ... in

// const user = {
//     email: "dhk10003@gmail",
//     password: "123456",
//     confirmPasswrod: "123456",
//     userRole: "admin",
// };

// for (let key in user) {
//     console.log(key); // email, password, confirmPasswrod, userRole
//     console.log(user[key]); // dhk10003@gmail, 123456, 123456, admin
//     console.log("${key}: ${user[key]}"); // email: dhk10003@gmail, password: 123456, confirmPasswrod: 123456, userRole: admin
//     console.log(user.key); // undefined, undefined, undefined, undefined // key is not a property but a variable.
// };

// for (let key in user) {
//    if (key === "role") {
//    user[key] = "superAdmin";
//    }
// };
// console.log(user.role); // superAdmin

// ---------------------------------------------------------------

////////// Object.Keys() method:
////////// Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

// const user = {
//     email: "dhk10003@gmail",
//     password: "123456",
//     name: "John",
//     age: 25,
//     isAdmin: false
// };

// console.log(Object.keys(user)); // ["email", "password", "name", "age", "isAdmin"]
// console.log(Object.keys(user).includes("email")); // true

////////// Object.values() method:
////////// Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

// console.log(Object.values(user)); // ["dhk10003@gmail", "123456", "John", 25, false]
// console.log(Object.values(user).includes("David")); // true

////////// Object.entries() method:
////////// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

// console.log(Object.entries(user)); // [["email", "dhk10003@gmail"], ["password", "123456"], ["name", "John"], ["age", 25], ["isAdmin", false]]
// console.log(Object.entries(user).includes("email")); // false
// console.log(Object.entries(user).includes("["email", "dhk10003@gmail"]")); // true
// const entries = Object.entries(user);
// console.log(entries[3][0]); // age

//////// Check key exist in an object using "in" operator:
// console.log("email" in user); // true
// console.log("country" in user); // false

//////// Check key exist in an object using "hasOwnProperty()" method:
// console.log(user.hasOwnProperty("email")); // true
// console.log(user.hasOwnProperty("country")); // false

// ---------------------------------------------------------------

////////// Object.assign() method:
////////// Copies the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target); // {a: 1, b: 4, c: 5}
