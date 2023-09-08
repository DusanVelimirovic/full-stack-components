import { createSlice } from "@reduxjs/toolkit";

/*
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Dusan",
    email: "john@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

// Export actions
export const { update, remove } = userSlice.actions;

export default userSlice.reducer; // Export reducer

*/

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    //remove: (state) => (state = {}),
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
