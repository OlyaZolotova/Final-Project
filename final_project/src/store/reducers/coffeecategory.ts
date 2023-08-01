import { createSlice } from "@reduxjs/toolkit"; 
import { drinkscategories } from "../actions/coffeecategory";


const coffeeCategoryDefaultState = {
  coffeecategory: [],
  loading: false,
  error: "",
};

export const coffeecategorySlice = createSlice({
  name: "coffeecategory",
  initialState: coffeeCategoryDefaultState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(drinkscategories.fulfilled, (state, action) => {
        state.coffeecategory = action.payload;
        state.loading = false;
      })
      .addCase(drinkscategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(drinkscategories.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const coffeecategoryReducer = coffeecategorySlice.reducer;
