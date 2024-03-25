import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../redux/favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
