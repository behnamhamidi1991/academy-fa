import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
