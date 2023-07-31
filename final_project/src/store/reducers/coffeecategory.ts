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
    // setCoffeeCategory: (state, action) => {
    //   state.coffeecategory = action.payload;
    //   localStorage.setItem(
    //     "coffeecategory",
    //     JSON.stringify(action.payload)
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(drinkscategories.fulfilled, (state, action) => {
        state.coffeecategory = state.coffeecategory.concat(action.payload);
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
