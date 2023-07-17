import { createSlice } from "@reduxjs/toolkit"; 
import { fetchPosts } from "../actions/bestsellers";

const bestsellersDefaultState = {
  bestsellers: [],
  loading: false,
  error: "",
};

export const bestsellersSlice = createSlice({
  name: "bestsellers",
  initialState: bestsellersDefaultState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.bestsellers = state.bestsellers.concat(action.payload);
        state.loading = false;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const bestsellersReducer = bestsellersSlice.reducer;
