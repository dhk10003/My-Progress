// This is where we will create our store.
// We will also import the reducer and apply it to the store.

import { createStore, combineReducers } from 'redux';

import counterReducer from './reducers/counterReducer';
// import {todoReducer} from './reducers/todoReducer';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    // todo: todoReducer
})

export const store = createStore(rootReducer);