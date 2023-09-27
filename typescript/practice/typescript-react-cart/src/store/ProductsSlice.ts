import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/models";

interface ProductsState {
    loading: boolean;
    error:boolean;
    favorites: Product[],
    productsList: Product[]
}
// this productsState interface is used to define the type of the initial state

const initialState:ProductsState = {
loading:false,
error:false,
favorites:[],
productsList:[]
}
// here we define the initial state of the slice


// remember, each reducer is simply a function that takes the state as an argument and returns the new state
// to imagine the shape of this object, look at the initial state, or the interface above
const productsSlice = createSlice({
    // name is just the name of the slice
    name:'product', 
    // initialState is the initial state of the slice
    initialState: initialState,
    // reducer functions:
    reducers:{
        fetchStart(state){
            state.loading = true;
            state.error = false;
        },

        fetchFail(state){
            state.loading= false;
            state.error = true;
        },
        // PayloadAction is a generic type that takes the type of the payload as an argument
        // this utility type is used to infer the type of the payload
        // so we're just stating that the payload is an array of products
        getProducts(state, action: PayloadAction<Product[]>){
            // here we're setting the loading and error properties to false, and setting the productsList property to the payload
            state.loading = false;
            state.error = false;
            state.productsList = action.payload;
        }, 
        // another action that takes a payload of type Product, but this time, we're adding a single product to the favorites array
        addFavorite(state, action:PayloadAction<Product>){
            // we're using the spread operator to add the new product to the favorites array
            state.favorites = [...state.favorites, action.payload]
        }, 
        removeFavorite(state, action: PayloadAction<Product[]>){
            state.favorites = action.payload
        }
    }
})

export const {addFavorite, fetchFail, fetchStart, getProducts, removeFavorite} = productsSlice.actions
export const productsReducer = productsSlice.reducer; 