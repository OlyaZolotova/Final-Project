import { createAsyncThunk } from "@reduxjs/toolkit";
import { bestsellersService } from "../../services";

export const fetchPosts = createAsyncThunk("user/fetchPosts", async () => {
  const { data } = await bestsellersService.getAll();

  return data.drinks;
});
