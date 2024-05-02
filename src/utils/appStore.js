import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem, clearCart } from "./cartSlice"; // Assuming these are your action creators

const appStore = configureStore({
  reducer: {
       cart: createReducer(
      {
        items: [],
      },
      (builder) => {
        builder
          .addCase(addItem, (state, action) => {
            state.items.push(action.payload);
          })
          .addCase(removeItem, (state) => {
            state.items.pop();
          })
          .addCase(clearCart, (state) => {
            state.items.length = 0;
          });
      }
    ),
  },
});

export default appStore;
