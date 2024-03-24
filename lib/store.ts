import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../src/features/menuSlice";
import cartReducer from "../src/features/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
