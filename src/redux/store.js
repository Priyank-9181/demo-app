import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";
import iceCreamReducer from "./slices/iceCreamSlice";

export const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer },
});
