let unionVariable : string | number | boolean;

unionVariable = 1;
console.log(unionVariable);

unionVariable = 'Hello';
console.log(unionVariable);

unionVariable = true;
console.log(unionVariable);
// type assertions allow us to override typescript 
// and treat a variable as a different type than it was 
// originally declared
function addWithUnion( arg1 : string | number, arg2 : string | number) : string | number{
    if (typeof arg1 === 'string' && typeof arg2 === 'string'){
        return arg1.concat(arg2);
    }
    else if (typeof arg1 === 'number' && typeof arg2 === 'number'){
        return arg1 + arg2;
    }
    // type assertion here:
    return (arg1 as string + arg2 as string)
}

console.log(addWithUnion('Hello', 'World'));
console.log(addWithUnion(1,2));
console.log(addWithUnion('Hello', 2));

console.log('-----2 numbers:-----')
console.log(addWithUnion(1,2));

console.log('str'.toString())