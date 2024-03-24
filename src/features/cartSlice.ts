import { createSlice } from "@reduxjs/toolkit";

interface Courses {
  id: string;
  image: string;
  title: string;
  content: string;
  isOff: boolean;
  price: number;
  offPrice: number;
  category: string;
}

interface Cart {
  items: Courses[];
}

const initialState: Cart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exisitingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!exisitingItem) {
        state.items.push(action.payload);
      }
      //   If the item already exists, we do nothing
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
