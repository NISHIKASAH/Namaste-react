import { configureStore } from "@reduxjs/toolkit";
import cartSlicereducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlicereducer,
  },
});

export default appStore;
