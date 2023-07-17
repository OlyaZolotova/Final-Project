import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bestsellersReducer } from "./reducers/bestsellers";
import { userReducer } from "./reducers/user";
import { coffeecategoryReducer } from "./reducers/coffeecategory";
import { foodcategoryReducer } from "./reducers/foodcategory";
// import { drinksReducer } from "./reducers/drinks";

export const rootReducer = combineReducers({
  bestsellers: bestsellersReducer,
  foodcategory: foodcategoryReducer,
  coffeecategory: coffeecategoryReducer,
  user: userReducer,
  // drinks: drinksReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


