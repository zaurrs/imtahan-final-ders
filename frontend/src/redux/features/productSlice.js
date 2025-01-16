import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
}

export const getProduct = createAsyncThunk("products", async()=>{
  const {data}= await axios.get("http://localhost:5000/product")
  
  return data.products
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
builder.addCase(getProduct.fulfilled,(state, action)=>{
  state.products=action.payload
})
  }
})

export const {  } = productSlice.actions

export default productSlice.reducer