import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0
  },
  reducers: {
    addToCart:(state , action) => {
    console.log(action.payload);
    
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { addToCart} = productSlice.actions

export default productSlice.reducer