import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
}

export const getProduct = createAsyncThunk("products", async()=>{
  const {data}= await axios.get("http://localhost:5000/product")
  
  return data.products
})

export const addProduct = createAsyncThunk("addproduct", async(product)=>{
  const {data}= await axios.post("http://localhost:5000/product", product)
  return data

})
export const deleteProduct = createAsyncThunk('deleteProduct', async (id) => {
  await axios.delete(`http://localhost:5000/product/${id}`);
  return id;
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
builder.addCase(getProduct.fulfilled,(state, action)=>{
  state.products=action.payload
}),
builder.addCase(addProduct.fulfilled, (state,action)=>{
  state.products.push(action.payload)
}),
builder.addCase(deleteProduct.fulfilled, (state,action)=>{
  state.products = state.products.filter((item)=>item._id !== action.payload)
})
  }
})


export default productSlice.reducer