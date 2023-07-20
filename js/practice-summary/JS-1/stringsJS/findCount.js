// Find the count of occurrences of a substring in a string

function findCount(str, sub){
    // let str = "whatever user passes in as first arg"
    // let sub = "whatever user passes in as second arg"
    let count = 0
    // finds first index if there is one:
    let index = str.indexOf(sub)
    // condition is: if an index exists (not -1)
    while(index !== -1){
        count++
        index = str.indexOf(sub, index + 1)
    }
    console.log(`The word "${sub}" appears \'${count}\' times in the string: ` + str)
    return count
}

let str = `You do not know what you do not know until you know`
let times = findCount(str, "know")
console.log(times)

