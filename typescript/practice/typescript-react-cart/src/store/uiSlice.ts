import { createSlice } from "@reduxjs/toolkit";
// createSlice is a function that takes an object as an argument
// this object has 3 properties: name, initialState, reducers
// name: the name of the slice
// initialState: the initial state of the slice
// reducers: an object that contains all the reducers of the slice
// each reducer is a function that takes the state as an argument and returns the new state

const uiSlice = createSlice({
    name:'ui', 
    initialState:{darkMode: true},
    reducers:{
        toggleDisplayMode(state){
            state.darkMode = !state.darkMode;
        }
    }
})

// the way we consume the slice is by exporting the reducer and the actions
// we have to export the reducer to add it to the store
// we have to export the actions to dispatch them from the components

export const uiReducer = uiSlice.reducer;
export const {toggleDisplayMode} = uiSlice.actions;