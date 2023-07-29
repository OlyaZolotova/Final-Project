import { createSlice } from "@reduxjs/toolkit";

const favoritesDefaultState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesDefaultState,
  reducers: {
    addToFavorites(state, action) {
      const isProductInFavorites = state.favorites.some(
        (fav) => fav.id === action.payload.id
      );
      if (!isProductInFavorites) {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addToFavorites } = favoritesSlice.actions;
