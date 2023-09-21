// Examples of type assertion with typescript:

let someValue:unknown = "12345";
let strLength:number = (<string>someValue).length;

console.log(strLength);

console.log()