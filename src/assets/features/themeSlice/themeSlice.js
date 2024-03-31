import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: localStorage.getItem("dark")
    ? JSON.parse(localStorage.getItem("dark"))
    : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state, action) => {
      localStorage.getItem((state.dark = action.payload));
      localStorage.setItem("dark", JSON.stringify(state.dark));
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
