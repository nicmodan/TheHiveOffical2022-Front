 import { getProducts } from "../services/products";
 import { createSlice } from "@reduxjs/toolkit";

 const hiveShipingSlicing = createSlice({
    name: "hiveShipingProducts",
    initialState: [],
    reducers: {
        setHiveShipingProduct(state, action){
            return action.payload
        }
    }
 })
 
 export const {setHiveShipingProduct}  = hiveShipingSlicing.actions

 export const initalizeState = ()=>{
    return async dispatch => {
        const response = await getProducts()
        dispatch(setHiveShipingProduct(response))
    }
 }

 export default hiveShipingSlicing.reducer