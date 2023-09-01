import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer: {
        todoReducer,
        counterReducer
    }
})

export default store