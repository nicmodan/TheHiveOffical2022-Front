import { createSlice } from "@reduxjs/toolkit";
import thehivecatlog from "../Services/thehivecatlog";

const thehivecatlogSlice = createSlice({
    name: "thehivecatlog",
    initialState: [],
    reducers: {
        setAllItems(state, action){
            return action.payload
        }
    }
})

export const {setAllItems} = thehivecatlogSlice.actions

export const inistalizeNote = ()=>{
    return async dispatch => {
        const response = await thehivecatlog.getAll()
        dispatch(setAllItems(response))
    }
}

export default thehivecatlogSlice.reducer