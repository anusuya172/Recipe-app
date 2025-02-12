import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import favoriteReducer from "./favoriteSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    favorites: favoriteReducer,

  },

  
});
