import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload); //payload --> наш новий продукт
      state.total += action.payload.price * action.payload.quantity; // тут quantity це кількість одиниць товару
      //   console.log(action, "action");
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
