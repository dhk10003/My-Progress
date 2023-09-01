import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';

const Todos = ()=>{

    // to read the data, we use the useSelector hook from react-redux
    // useSelector accepts a function as an argument, and that function should accept the entire Redux store state as an argument
    // the function should return the data that we want from the store
    // useSelector will then return that data to us
    // we can then use that data in our component

    const todos = useSelector(state=>state.todos)

    const dispatch = useDispatch()

    return(
        <>
            <div>Todos</div>
            {
                todos.map(todo=>{
                    return (
                        <div key={todo.id}>
                            <h2>{todo.text}</h2>
                            <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todos;