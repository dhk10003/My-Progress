import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Learn React',
            completed: true
        },
        {
            id: 2,
            title: 'Learn Redux',
            completed: false
        },
        {
            id: 3,
            title: 'Learn Redux Toolkit',
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            console.log(action.payload)
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            // with redux-toolkit, we can directly mutate the state!!!
            state.todos.push(newTodo)
        },
        removeTodo:(state, action) => {
            const removeId = action.payload
            state.todos = state.todos.filter(todo => todo.id !== removeId)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer