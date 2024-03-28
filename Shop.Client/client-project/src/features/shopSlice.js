import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
};
const baseURL = "http://localhost:5000/";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`${baseURL}api/products`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(setProducts(res.data));
    console.log(res);
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`${baseURL}api/products/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(setProduct(res.data));
    console.log(res);
  }
);

export const shopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setProduct } = shopSlice.actions;

export default shopSlice.reducer;
