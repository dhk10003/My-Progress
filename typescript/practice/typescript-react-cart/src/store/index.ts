// because this file is named index.ts, we can import it from the store folder without specifying the file name, just the folder name

import {configureStore} from '@reduxjs/toolkit'
import { uiReducer } from './uiSlice'
import { productsReducer } from './ProductsSlice'

// export store, combine reducers/slices uiReducer and productsReducer
export const store = configureStore({reducer:{
    ui: uiReducer, 
    products: productsReducer
}})

// we have to export the RootState type to use it in the useSelector hook
// this is just a type that represents the type of the state of the store
// the ReturnType utility type is used to infer the type of the state of the store

// This is what allows us to set the type of the state in app.tsx
export type RootState = ReturnType<typeof store.getState>