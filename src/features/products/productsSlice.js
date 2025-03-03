import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";

const initialState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productsApi.endpoints.getProducts.matchFulfilled,
        (state, action) => {
          state.products = action.payload;
          state.status = "succeeded";
        },
      )
      .addMatcher(productsApi.endpoints.getProducts.matchPending, (state) => {
        state.status = "loading";
      })
      .addMatcher(productsApi.endpoints.getProducts.matchRejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
