import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 5,
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    sell: (state, action) => {
      state.numberOfCakes -= 1;
    },

    restock: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export const { sell, restock } = cakeSlice.actions;

export default cakeSlice.reducer;
