import { api } from "./configs/http";

class FoodCategoryService {
  getAll() {
    return api.get("/api/v1/food-categories/", {});
  }
}

export const foodCategoryService = new FoodCategoryService();