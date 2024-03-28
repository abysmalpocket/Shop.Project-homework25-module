import { configureStore } from "@reduxjs/toolkit";
import  shopSlice  from "../features/shopSlice";

export const store = configureStore({
	reducer: {
		products: shopSlice
	}
})