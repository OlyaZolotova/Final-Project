import { createSlice } from "@reduxjs/toolkit";
import { foodcategories } from "../actions/foodcategory";

const foodCategoryDefaultState = {
  foodcategory: [],
  loading: false,
  error: "",
};

export const foodcategorySlice = createSlice({
  name: "foodcategory",
  initialState: foodCategoryDefaultState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(foodcategories.fulfilled, (state, action) => {
        state.foodcategory = action.payload;
        state.loading = false;
      })
      .addCase(foodcategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(foodcategories.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const foodcategoryReducer = foodcategorySlice.reducer;
