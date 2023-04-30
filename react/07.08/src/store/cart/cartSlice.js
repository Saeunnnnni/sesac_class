import { createSlice } from '@reduxjs/toolkit'


const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
 initialState,
  reducers: {
    addCart :(state,action) => {
          state = state.push(action.payload); //기존의 배열의 마지막 인자로 넣어야 함 
          action.type='SET_ADD_ITEM'
    },
      deleteCart: (state, action) => {
        state.splice(action.payload,1)
        action.type='SET_DELETE_ITEM'
    },

  }
})


export const { addCart, deleteCart} = cartSlice.actions
export default cartSlice.reducer