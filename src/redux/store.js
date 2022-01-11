import { configureStore } from "@reduxjs/toolkit";
// import navSlice from "./nav.slice";
// import appSlice from "./app.slice";
import chatSlice from "./chat.slice";

export default configureStore({
  reducer: {
    chatSlice: chatSlice,
    // navSlice: navSlice,
  },
});
