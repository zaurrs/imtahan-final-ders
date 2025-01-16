import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket:[]
}
const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket: (state, action)=>{
            const existProduct = state.basket.find((item)=>item._id === action.payload._id)
            if(!existProduct) {
                state.basket.push({...action.payload, count:1})
            }else{
                existProduct.count +=1
            }
        },
        deleteBasket:(state, action)=>{
            state.basket = state.basket.filter((item)=>item._id !== action.payload._id)

        },
        plusBtn: (state, action)=>{
            
        }
    }
})


export const {  addBasket,deleteBasket } = basketSlice.actions

export default basketSlice.reducer