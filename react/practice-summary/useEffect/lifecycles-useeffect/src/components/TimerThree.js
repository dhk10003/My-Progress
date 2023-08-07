import { useEffect, useState } from 'react'

const TimerThree = () => {
  const [count, setCount] = useState(0)

  //Add the effect in the function body
  useEffect(() => {
    console.log('useEffect - mounting initial render')

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      console.log('Cleanup - component about to unmounted')
      clearInterval(id)
    }
    //Return a cleanup function which will run automatically before the component is removed from the DOM
  }, [])

  return (
    <div className="Timer">
      <h2>Timer Three</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default TimerThree
