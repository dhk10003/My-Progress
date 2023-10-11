// REST operator for function parameters:

function sum(...numbers){
    // log all arguments passed into the function:
    console.log(numbers)
    // This is going to return object, because arrays are objects in JavaScript:
    console.log(typeof numbers)
    // This line shows us that we are working with an array:
    console.log(Array.isArray(numbers))
    return numbers.reduce((total, current) => total + current)
}

const result = sum(1,2,3,4,5)

// console.log(result)

function anything(...args){
    // think of the above syntax doing thi behind the scenes:
    // const args = [...arguments]
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

anything(1,2,3,4,5)
