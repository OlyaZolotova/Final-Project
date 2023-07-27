import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cartReducer } from "./reducers/cartSlice";
import { bestsellersReducer } from "./reducers/bestsellers";
import { userReducer } from "./reducers/user";
import { coffeecategoryReducer } from "./reducers/coffeecategory";
import { foodcategoryReducer } from "./reducers/foodcategory";

const rootReducer = combineReducers({
  cart: cartReducer,
  bestsellers: bestsellersReducer,
  foodcategory: foodcategoryReducer,
  coffeecategory: coffeecategoryReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
