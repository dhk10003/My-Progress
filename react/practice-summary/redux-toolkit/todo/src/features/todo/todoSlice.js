import {createSlice, nanoid} from '@reduxjs/toolkit';
// createSlice is a function that accepts an initial state, an object full of reducer functions, 
// and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

// nanoid is a function that generates a unique ID string. We'll use it to generate IDs for our todos.
// a nanoid is a unique ID string of 21 characters in length that's generated using a secure random algorithm. It's extremely unlikely that two nanoids will be the same.

// set initial state:
const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    // slices need a name, an initialState, and a set of reducer functions
    // these must be named "name", "initialState", and "reducers" because these are the keys that configureStore expects to find in the object that it receives from createSlice
    // a slice needs a name so that it can automatically generate action types and action creators for the reducers that it exports.
    name:"todo",
    initialState,

    // reducers is an object full of reducer functions, keyed by action name.
    // we can call these functions directly with dispatch, and pass them an argument that will automatically be used as the action object's payload field.
    // EX: dispatch(addTodo("Say Hello")) will dispatch an action object with the type field set to "todo/addTodo" and the payload field set to "Say Hello".
    reducers:{
        // Each reducer function accepts two arguments: the current state, and an action object with a type field.
        addTodo:(state, action)=>{
            // this function needs to add a new todo object to the state.todos array.
            // The todo object should have the following fields:
            // id: A unique ID that's generated using nanoid()
            // text: The text content that the user entered
            // completed: false, since a new todo item is always uncompleted
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            // The reducer should then push the newTodo object onto the state.todos array.
            // when using redux-toolkit, we can mutate the state directly inside of reducers
            // redux-toolkit will automatically generate an action creator function that calls the reducer and dispatches the action when we call it.
            // SEE HOW EASY OUR REMOVE TODO REDUCER IS!!!
            state.todos.push(newTodo);      
        },

        removeTodo:(state, action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload);
        }

    }
})

// we can export the generated action creators and the reducer function from the slice, and use them in our components to dispatch actions.
export const {addTodo, removeTodo} = todoSlice.actions;

// reducer is automatically generated by createSlice, so we can export it directly as the default export.
export default todoSlice.reducer;

// to import all of these exports to the store, we will type the following: import todoReducer from './features/todo/todoSlice'