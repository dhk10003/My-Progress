import {useState} from 'react';

import {useDispatch} from 'react-redux';

import {addTodo} from '../features/todo/todoSlice';

const AddTodo = ()=>{

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle("")
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo