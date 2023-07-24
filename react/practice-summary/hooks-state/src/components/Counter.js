import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount(count + 2)}> + </button>
    </div>
  )
}

export default Counter
