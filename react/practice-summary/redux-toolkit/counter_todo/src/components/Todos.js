import {useSelector, useDispatch} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = ()=>{

    const todos = useSelector(state=>state.todoReducer.todos)
    console.log(todos)
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Todos</h1>
            <ul style={{
                listStyle: "none",
            }}>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <h2>{todo.title}</h2>
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;