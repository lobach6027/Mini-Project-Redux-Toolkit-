import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {list: [
    { id: 1, title: "Bread", price: 74 },
    { id: 2, title: "Milk", price: 24 },
    { id: 3, title: "Sugar", price: 150 },
    { id: 4, title: "Butter", price: 550 }
  ]},
  reducers:{
deleteItem: (state,action)=>{
  state.list = state.list.filter(({id})=>id!==action.payload)
},
addProduct:(state,action)=>{
  state.list.push(action.payload)
}
  }
});
export default productsSlice.reducer;
export const {deleteItem, addProduct} = productsSlice.actions;