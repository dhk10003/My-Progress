const str = "Hello world"

// H
console.log(str[0])
// e
console.log(str[1])
// l
console.log(str[2])
// l
console.log(str[3])
// o
console.log(str[4])

// " "
console.log(str[5])

// w
console.log(str[6])
// o
console.log(str[7])
// r
console.log(str[8])
// l
console.log(str[9])
// d
console.log(str[10])


// Loop:

console.log("Looping through our string:")
// REMEMBER THE LENGTH AND THE LAST INDEX ARE NOT THE SAME VALUE!

// for loop to log each character in our string:
for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// How to access the last character in a string:
console.log("last character in a string:")
console.log(str[str.length - 1])

let str2 = "Hello Clarusway"
// we can not change a string, but we can reassign it:
str2[2] = "I"
str2 = "Hi Clarusway"

console.log(str2)