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
        (fav) => fav.slug=== action.payload.slug
      );
      if (!isProductInFavorites) {
        state.favorites.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      state.favorites = removeItem;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addToFavorites, removeItem } = favoritesSlice.actions;
