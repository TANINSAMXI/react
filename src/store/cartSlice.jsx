import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // ✅ Має бути масив
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
