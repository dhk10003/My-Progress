import { useState } from 'react'
import './App.css'
import TimerFour from './components/TimerFour'
// import TimerThree from './components/TimerThree'
// import Counter from './components/Counter'
// import Timer from './components/Timer'
// import TimerTwo from './components/TimerTwo'

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {/* {show && <Timer />} */}
      {/* <Counter /> */}
      {/* {show && <TimerTwo />} */}
      {/* {show && <TimerThree />} */}
      {show && <TimerFour />}
    </div>
  )
}

export default App
