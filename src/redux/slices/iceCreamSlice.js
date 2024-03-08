import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCream: 0,
  cash: 200,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    sellIC: (state, action) => {
      state.numberOfIceCream--;
      state.cash += 10;
    },
    restockIC: (state, action) => {
      state.numberOfIceCream += action.payload;
      const total = action.payload * 7;
      state.cash = state.cash - total;
    },
  },
});

export const { sellIC, restockIC } = iceCreamSlice.actions;

export default iceCreamSlice.reducer;
