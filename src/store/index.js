import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";
export const store = configureStore({
    reducer:{
       products:productsSlice,
       basket:basketSlice
    }
})