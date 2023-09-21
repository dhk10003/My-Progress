const func = (num1:number, num2:number) : number => num1 + num2;

const greet = (greeting:string, name?:string) =>{
    // Name will default to undefined if value is not passed in
    return greeting + ' ' + name ? name : "" + '!';
}

console.log(greet('Hello', 'Steve'));
console.log(greet('Hello')); // Hello undefined!

// function with rest parameters
function greetPeople(greeting:string, ...names:string[]){
    return greeting + " " + names.join(", ") + "!";
}

console.log(greetPeople('Hello', 'Steve', 'Bill', 'James', 'Erica')); // Hello Steve, Bill, James, Erica!