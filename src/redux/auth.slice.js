import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: null,
    user: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
    },
  },
  reducers: {
    login(state, action) {
      const [token, user] = action.payload;
      state.user = user;
      state.token = token;
    },
    logout(state, action) {
      const [token, user] = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
