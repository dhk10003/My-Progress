// state for counter needs to go here
// This component needs to increment and decrement a counter
import { useState } from "react";
import Button from "./Button";


function Counter() {
    // counter number state:
    let [num, setNum] = useState(0);

    return (
        <div>
            {/* we call an anonymous function here because we need to pass an argument to our add function */}
            <Button setNum={setNum} operator={"-"} />
            <h1>{num}</h1>
            <Button setNum={setNum} operator={"+"} />
        </div>
    )
}

export default Counter
