import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriteRecipes.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.favoriteRecipes.splice(existingIndex, 1); 
      } else {
        state.favoriteRecipes.push(action.payload); 
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
