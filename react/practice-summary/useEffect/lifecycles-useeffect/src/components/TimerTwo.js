import { useEffect, useState } from 'react'

const TimerTwo = () => {
  const [count, setCount] = useState(0)

  //Add the effect in the function body
  useEffect(() => {
    console.log('useEffect - mounting initial render')

    setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }, [])

  return (
    <div className="Timer">
      <h2>Timer Two</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default TimerTwo
