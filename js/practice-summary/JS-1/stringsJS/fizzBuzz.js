/*
    FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, 
    but here’s the catch, 
    multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 
    and lastly print “FizzBuzz” for multiples of three and five.
*/

function fizzBuzz(){
    // print numbers 1-100
    for(let i = 1; i < 101; i++){
        if(i % 3 === 0 && i % 5 == 0){
            console.log('FIZZBUZZ')
        }else if(i % 5 == 0){
            console.log("BUZZ")
        }else if(i % 3 == 0){
            console.log("FIZZ")
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz()