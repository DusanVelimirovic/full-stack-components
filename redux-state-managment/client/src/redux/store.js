// This is Store
// Object witch allow us to pull information about user
// To use Store we need to wrapp whole aplication

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import reducer

export default configureStore({
  reducer: {
    user: userReducer,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});
