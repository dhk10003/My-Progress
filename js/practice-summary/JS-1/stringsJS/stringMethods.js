// String methods:

const str = "Hello world, I am learning how to code @ Clarusway!"

// slice:
console.log("--------------SLICE--------------")
// slice takes 2 arguments: (start index, end index (the character at the end index is not included))
// it returns a new string, it does not change the original string
// if we do not pass any arguments, it returns the whole string
console.log(str.slice(0, 11)) //this will stop at the 11th index, giving us indexes 0-10
// to move backwards, we need to pass negative numbers:
// we still need to move left to right, so the first value has to be smaller than the second value
console.log(str.slice(-10,-1))

// substring:
console.log("--------------SUBSTRING--------------")
// substring takes 2 arguments: (start index, end index (the character at the end index is not included))
// it returns a new string, it does not change the original string
// if we do not pass any arguments, it returns the whole string
console.log(str.substring(0, 11)) //this will stop at the 11th index, giving us indexes 0-10
// to move backwards, we need to pass negative numbers:
// we still need to move left to right, so the first value has to be smaller than the second value
console.log(str.substring(-10,-1))

// the difference between substring and slice is if the first value is bigger than the second value, it will swap them

// concat:
console.log("--------------CONCAT--------------")
const string1 = "Hello"
const string2 = "world"

// concat takes 2 arguments: (string1, string2)
// it returns a new string, it does not change the original string
console.log(string1.concat(" ", string2))

// includes:
console.log("--------------INCLUDES--------------")
// includes takes 2 arguments: (string, value)
// it returns a boolean value
// it is case sensitive
console.log(`checking if our string includes "Hello":`)
console.log(str.includes("Hello"))
// lowercase:
console.log(`checking if our string includes "hello":`)
console.log(str.includes("hello"))
console.log(str.includes(", I"))

// indexOf:
console.log("--------------INDEXOF--------------")
// indexOf takes 2 arguments: (string, value)
// it returns the index of the first occurrence of the value
// it returns -1 if the value is not found
// it is case sensitive
console.log(`checking the index of "Hello":`)
console.log(str.indexOf("Hello"))
// lowercase:
console.log(`checking the index of "hello":`)
console.log(str.indexOf("hello"))
// check to see if a SINGLE character is in the string:
console.log(`checking the index of "z":`)
console.log(str.indexOf("z"))

// check to see if string includes an @ sign:
function includesAtSign(string, query){
    console.log('-----------CHECKING FOR @ SIGN-----------')
    if(string.indexOf(query) === -1 ){
        console.log(`String of ${string} does not include ${query}`)
    }else{
        console.log(`String of ${string} DOES include ${query}`)
    }
}

includesAtSign(str, "@")

// 2 arguments for indexOf:
console.log(`--------------2 ARGUMENTS FOR INDEXOF--------------`)
// indexOf takes 2 arguments: (string, value)
// the second argument is for a starting index  (optional)
// it returns the index of the first occurrence of the value
// it returns -1 if the value is not found
// it is case sensitive
console.log(`checking the index of "Hello" starting at index 10:`)  
console.log(str.indexOf("Hello", 10))
// false
console.log(`checking the index of "Hello" starting at index 0:`)  
console.log(str.indexOf("Hello", 0))

// lastindexOf:
console.log("--------------LASTINDEXOF--------------")
// lastIndexOf takes 2 arguments: (string, value)
// the second argument is for a starting index  (optional)
// it returns the index of the last occurrence of the value
// it returns -1 if the value is not found
// it is case sensitive
console.log(`checking the last index of "Hello":`)
console.log(str.lastIndexOf("Hello"))
// lowercase:
console.log(`checking the last index of "h":`)
console.log(str.lastIndexOf("h"))

// search method:
console.log("--------------SEARCH--------------")
// search takes 2 arguments: (value, string)
// regular expressions in search method:
// regular expressions are patterns used to match character combinations in strings
// the serach method uses regular expressions
// it returns the index of the first occurrence of the value
// it returns -1 if the value is not found
// it is case sensitive
console.log(`checking the index of "Hello":`)
console.log(str.search("Hello"))
// lowercase:
console.log(`checking the index of "hello":`)
console.log(str.search("hello"))
// example using regular expressions:
console.log(`checking the index of "h":`)
console.log(str.search(/h/))

// replace method:
console.log("--------------REPLACE--------------")
// replace takes 2 arguments: (value, new value)
// this will only replace the first occurrence of the value
// it returns a new string, it does not change the original string
// it is case sensitive
console.log(`replacing "Hello" with "Hi":`)
console.log(str.replace("Hello", "Hi"))
// lowercase:
console.log(`replacing "hello" with "hi":`)
console.log(str.replace("hello", "hi"))
// example using regular expressions:
console.log(`replacing "h" with "H":`)
console.log(str.replace(/h/, "H"))

// replaceAll method:
console.log("--------------REPLACEALL--------------")
// replaceAll takes 2 arguments: (value, new value)
// this will replace all occurrences of the value
// it returns a new string, it does not change the original string
// it is case sensitive
console.log(`replacing all "Hello" with "Hi":`)
console.log(str.replaceAll("Hello", "Hi"))
// lowercase:
console.log(`replacing all "hello" with "hi":`)
console.log(str.replaceAll("hello", "hi"))
// example using regular expressions:
// console.log(`replacing all "h" with "H":`)
// console.log(str.replaceAll(/h/, "H"))

// Split:
console.log("--------------SPLIT--------------")
// split takes 2 arguments: (value, split value)
// this will split the string into an array of substrings  
// it returns an array of strings
// it is case sensitive
console.log(`splitting the string at the space:`)
console.log(str.split(" "))
// This makes an array tha tlooks like:
let newStrings = ["Hello,", "my", "name", "is", "John", "Doe", "and", "I", "am", "30", "years", "old."]

console.log(str.split("e"))

// lowerCase:
console.log("--------------LOWERCASE--------------")
// lowerCase takes 1 argument: (string)
// it returns a new string, it does not change the original string
console.log(`making the string lowercase:`)
console.log(str.toLowerCase())

// upperCase:
console.log("--------------UPPERCASE--------------")
// upperCase takes 1 argument: (string)
// it returns a new string, it does not change the original string
console.log(`making the string uppercase:`)
console.log(str.toUpperCase())

const jumbledText = "A GoOD DeVeLopER maY Be AbLE to SEaRCh SolutIONs TO ProBLemS"
console.log('--------BEFORE(JUMBLED)--------')
console.log(jumbledText)
const first = jumbledText[0].toUpperCase()
const rest = jumbledText.slice(1).toLowerCase()
const result = first + rest
console.log("--------AFTER--------")
console.log(result)


// trim:
console.log("--------------TRIM--------------")
// trim takes 1 argument: (string)
// it returns a new string, it does not change the original string
// it removes whitespace from both sides of a string
console.log(`trimming the string:`)
const whiteSpace = "     hello     "
console.log(whiteSpace)
console.log(whiteSpace.trim())

// startsWith:
console.log("--------------STARTSWITH--------------")
// startsWith takes 2 arguments: (string, value)
// it returns true if the string starts with the value
// it returns false if the string does not start with the value
// it is case sensitive
console.log(`checking if the string starts with "Hello":`)
console.log(str.startsWith("Hello"))
// lowercase:
console.log(`checking if the string starts with "hello":`)
console.log(str.startsWith("hello"))

// endsWith:
console.log("--------------ENDSWITH--------------")
// endsWith takes 2 arguments: (string, value)
// it returns true if the string ends with the value
// it returns false if the string does not end with the value
// it is case sensitive
console.log(`checking if the string ends with "old.":`)
console.log(str.endsWith("old."))
// lowercase:
console.log(`checking if the string ends with "old.":`)
console.log(str.endsWith("old."))

// list of different string methods:
console.log("--------------LIST OF DIFFERENT STRING METHODS--------------")
// https://www.w3schools.com/js/js_string_methods.asp
