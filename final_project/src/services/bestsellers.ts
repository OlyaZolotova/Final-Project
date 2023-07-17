import { api } from "./configs/http";

class BestsellersService {
  getAll() {
    return api.get("/api/v1/drinks/", {});
  }
}

export const bestsellersService = new BestsellersService();