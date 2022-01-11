import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    message: null,
    isOpen: false,
  },
  reducers: {
    setError(state, action) {
      const message = action.payload;
      state.message = message;
      state.isOpen = true;
    },
    closeError(state) {
      state.message = null;
      state.isOpen = false;
    },
  },
});

export const { setInfo, closeInfo, setError, closeError, setStage } = errorSlice.actions;
export default errorSlice.reducer;
