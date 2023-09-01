import {useState} from 'react'

// useDispatch is a hook provided by react-redux to let you dispatch actions from the redux store
// it doesn't come from redux-toolkit, but react-redux, just the way it's all wired together
// we have to use useDispatch to dispatch actions to the redux store
import {useDispatch} from 'react-redux'
// when we import addTodo, we're importing the generated action creator function
// we can call it directly, and it will dispatch an action to the Redux store

// we have to import our action creator function from the todoSlice file
// this way we can call it directly, and it will dispatch an action to the Redux store
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = ()=>{

    // we will use dispatch to dispatch actions to the redux store
    const dispatch = useDispatch()

    // we will use state to control the input field
    const [value, setValue] = useState("")

    // we will use the action creator function to dispatch an action to the redux store
    const onSubmit = (e)=>{
    e.preventDefault()

    // we can directly pass the value of the input field to the action creator function
    // this will automatically be wrapped in an action object for us as the payload field
    dispatch(addTodo(value))

    // clear input
    setValue("")
}

    return(
        
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo