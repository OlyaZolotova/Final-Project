import { api } from "./configs/http";

class CoffeeCategoryService {
  getAll() {
    return api.get("/api/v1/drink-categories/", {});
  }
}

export const coffeeCategoryService = new CoffeeCategoryService();