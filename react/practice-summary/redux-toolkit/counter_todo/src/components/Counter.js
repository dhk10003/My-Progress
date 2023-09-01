import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement,reset } from '../features/counter/counterSlice'


const Counter = () => {
    
    // set up the state with useSelector:
    const counter = useSelector(state => state.counterReducer.counter)

    // set up the dispatch:
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>

    </div>
  )
}

export default Counter