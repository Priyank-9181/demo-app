import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";

export const store = configureStore({
  reducer: { cake: cakeReducer },
});
