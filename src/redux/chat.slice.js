import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    user: {
      name: null,
      lastActivity: false,
      avatar: null,
    },
  },
  reducers: {
    setUser(state, action) {
      const [name, lastActivity, avatar] = action.payload;
      state.user.name = name;
      state.user.avatar = avatar;
      state.user.lastActivity = lastActivity;
    },
  },
});

export const { setUser } = chatSlice.actions;
export default chatSlice.reducer;
