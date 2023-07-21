const Button = ({operator, setNum})=>{

    function handleClick(){
        switch (operator) {
            case "+":
                // when updating state based on a previous value, we need to use a callback function
                // this is because state updates are asynchronous

                // this is the correct way to update state based on a previous value
                setNum((prevNum)=>prevNum+1)

                // this is the incorrect way to update state based on a previous value
                // setNum(num+1)

                // the reason the above method is incorrect is because state updates are asynchronous
                // this means that the state update will not happen immediately
                // by using a callback function, we are ensuring that the state update will happen immediately
                break;
            case "-":
                setNum((prevNum)=>prevNum-1)
                break;
            default:
                break; 
        }
}
    return (
        <button onClick={handleClick}>{operator}</button>
    )
}

export default Button