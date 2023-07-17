import { createAsyncThunk } from "@reduxjs/toolkit";
import { foodCategoryService } from "../../services/foodcategory";

export const foodcategories = createAsyncThunk("food/foodcategories", async () => {
  const { data } = await foodCategoryService.getAll();

  return data.categories;
});
