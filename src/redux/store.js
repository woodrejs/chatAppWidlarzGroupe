import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import errorSlice from "./error.slice";
import chatSlice from "./chat.slice";

export default configureStore({
  reducer: {
    chatSlice: chatSlice,
    errorSlice: errorSlice,
    authSlice: authSlice,
  },
});
