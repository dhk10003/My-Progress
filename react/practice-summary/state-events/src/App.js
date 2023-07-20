import { useState } from "react";
import Button from "./Button";
import NumDisplay from "./NumDisplay";
import Input from "./Input";
import "./App.css";


// because app is controlling state and logic, 
// it is a container component, aka smart component
const App = () => {

  let [num, setNum] = useState(0);
  const [input, setInput] = useState("")

  function handleClick(operator) {
    console.log("calling changeNum")
    console.log(operator)
    if (operator === "+") {
      setNum(num + 1)
    } if (operator === "-") {
      setNum(num - 1)
    }
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div id="main">
      <Button text={"-"} handleClick={handleClick} />
      <NumDisplay number={num} />
      <Button text={"+"} handleClick={handleClick} />
      {/* controlled component: */}
      <Input val={input} handleChange={handleChange}/>
    </div>
  )
}

export default App;