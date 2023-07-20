let ourString = "This is our string, let's experiment with escape sequences"
console.log(ourString)

// \n: new line:
ourString = "This is our string, \nlet's experiment with escape sequences"
console.log(ourString)

// \t: tab:
ourString = "This is our string, \n\tlet's experiment with escape sequences"
console.log(ourString)

// \': single quote:
ourString = "This is our string, \n\tlet's experiment with escape sequences \n\t\t\'single quote\'"
console.log(ourString)

// \": double quote:
ourString = "This is our string, \n\tlet's experiment with escape sequences \n\t\t\'single quote\' \n\t\t\t\"double quote\""
console.log(ourString)

// \\: backslash:
ourString = "This is our string, \n\tlet's experiment with escape sequences \n\t\t\'single quote\' \n\t\t\t\"double quote\" \n\t\t\t\t\\backslash\\"
console.log(ourString)

// \b: backspace:
ourString = "This is our string, \n\tlet's experiment with escape sequences \n\t\t\'single quote\' \n\t\t\t\"double quote\" \n\t\t\t\t\\backslash\\ \n\t\t\t\t\t\bbackspace\b"
console.log(ourString)

// \r: carriage return:
ourString = "This is our string, \n\tlet's experiment with escape sequences \n\t\t\'single quote\' \n\t\t\t\"double quote\" \n\t\t\t\t\\backslash\\ \n\t\t\t\t\t\bbackspace\b \n\t\t\t\t\t\t\rcarriage return"
console.log(ourString)

// example of quotes:
console.log("This is how we can store a quote with quotations:")

let quote = "This is a quote: \"To be or not to be\""

quote = 'This is a quote: "To be or not to be"'
console.log(quote)