import { useEffect, useState } from 'react'

const TimerFour = () => {
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

  //add a new effect that will run only once the value inside the dependency array changes

  useEffect(() => {
    console.log('useEffect - on updating phase')
    document.title = count
  }, [count])

  return (
    <div className="Timer">
      <h2>Timer Four</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default TimerFour
