import "./Counter.css"
import { useDispatch, useSelector } from "react-redux"
import { dec, inc, reset } from "../../redux/actions/counterAction"

//! Reducer'lara key olarak isim atamasi yapilmazsa bu sekilde cagrilabilriler.
//? const counter = useSelector((state) => state.counterReducer.counter)
//? const todoList = useSelector((state) => state.todoReducer.todoList)

const Counter = () => {
  // useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
  // dispatch basically sends an action to the reducer!
  
  const dispatch = useDispatch()
  // const counter = useSelector((state) => state.counter)
  // const counter = useSelector((state) => state.count.counter)

  const { counter } = useSelector((state) => state.count)
  // This state is actually the state in the store.
  // when we use useSelector, we are actually getting the state from the store.
  // this "store" is an arbitrary name. we can name it whatever we want, but as a convention, we name it "store".
  // this initial "state" or store is defined by our reducers. (counterReducer.js)
  // if the store changes, anything using counter will be updated.

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      {/* If this counter value changes, the component will be updated, just like a normal state. */}
      <h1>counter:{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // The two following lines are the same.
          // they work the same way because we are using the useDispatch hook.
          // if we pass an object, it will be sent to the reducer as the action.
          // if we pass one of our funcitons, it will be executed, and the return value will be sent to the reducer as the action.
          // in our case, we're returning an object from our inc() function, so it works the same way.

          // onClick={() => dispatch({ type: "INCREASE" })}
          onClick={() => dispatch(inc())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREASE" })}
          onClick={() => dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
