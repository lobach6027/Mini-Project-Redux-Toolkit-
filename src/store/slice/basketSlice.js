import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    list: [{id:1, count:2}],
  },
  reducers: {
    addToBasket: (state, {payload}) => {
        const product = state.list.find(({id})=>id === payload)
        if(product){
            product.count++
        }else{
            state.list.push({id:payload,count:1})
        }
       
    },
    incrementBasket: (state,action)=>{
        const product = state.list.find((item)=>item.id===action.payload)
        product.count++
    },
    decrementBusket: (state,action)=>{
       const product = state.list.find((item)=>item.id===action.payload)
       if(product.count === 1){
        state.list = state.list.filter((item)=>item.id !== action.payload)
       }else{
        product.count--
       }  
    },
    deleteFromBasket:(state,{payload})=>{
        state.list = state.list.filter(({id})=>id!==payload)
    }
}});
export default basketSlice.reducer;
export const {addToBasket, incrementBasket, decrementBusket,deleteFromBasket} = basketSlice.actions;
