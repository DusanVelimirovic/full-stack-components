// Create redux store
import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./bookReduces.jsx";

export const store = configureStore({
  reducer: {
    books: BookReducer,
  },
});
