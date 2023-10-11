function outer() {
    const x = 10;

    function inner() {
        // This inner function will remember and have access to 'x' 
        // even after the outer function has finished running
        console.log(x); // Inner function forms a closure over 'x'
    }

    return inner; // Return the inner function
}

const closureFunction = outer();
closureFunction(); // Accesses and logs 'x' (outputs 10)

//   This happens with callbacks as well:
function outer2() {
    const x = 10;

    function inner2() {
        console.log(x);
    }

    return inner2;
}

function callback(fn) {
    fn();
}

const closureFunction2 = outer2();
callback(closureFunction2); // Outputs 10

//   This happens with event listeners as well:
function outer3() {
    const x = 10;

    function inner3() {
        console.log(x);
    }

    return inner3;
}

const closureFunction3 = outer3();
//   document.addEventListener('click', closureFunction3); // Outputs 10

//   This happens with loops as well:
function outer4() {
    const arr = [1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
        setTimeout(function inner4() {
            console.log(arr[i]);
        }, 3000);
    }
}

outer4(); // Outputs 1, 2, 3

//------------------ PRACTICAL EXAMPLES ------------------//

function counter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
}

const counterInstance = counter();
counterInstance.increment();
console.log(counterInstance.count) // undefined.  
// We can't access the count variable directly
// count is now private to the counter function
console.log(counterInstance.getCount()); // Accesses the count variable (outputs 1)

// ----------------- callbacks and event handling ----------------------:

function setupClickEvent() {
    const message = "Button clicked!";

    document.getElementById("myButton").addEventListener("click", function () {
        alert(message); // Accesses 'message' from the outer function
    });
    // to delete this scope, we would have to remove the event listener.
    // if we remove the event listener, we remove the function that is being called
    // and the function that is being called is the function that is creating the closure
    // so if we remove the event listener, we remove the function that is creating the closure
    // and if we remove the function that is creating the closure, we remove the closure, clearing up memory

    // remove the event listener:
    // document.getElementById("myButton").removeEventListener("click", function () {
    //     alert(message); // Accesses 'message' from the outer function
    // });

}

setupClickEvent();