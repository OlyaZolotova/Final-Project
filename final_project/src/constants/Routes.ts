export enum Routes {
  Home = "/",
  Register = "/register",
  Login = "/login",
  Verify = "/verify/:uid/:token",
  Post = "/post/:id",
  Menu = "/categories",
  DrinksFromCategory = "/drinks/:slug",
  Drink = "/drink/:id",
  FoodFromCategory = "/food/:slug",
  FoodProduct = "/foodproduct/:id",
}