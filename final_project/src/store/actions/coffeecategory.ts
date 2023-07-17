import { createAsyncThunk } from "@reduxjs/toolkit";
import { coffeeCategoryService } from "../../services/coffeecategory";

export const drinkscategories = createAsyncThunk("drink/drinkcategories", async () => {
  const { data } = await coffeeCategoryService.getAll();

  return data.categories;
});
