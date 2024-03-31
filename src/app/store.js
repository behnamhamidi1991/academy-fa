import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
