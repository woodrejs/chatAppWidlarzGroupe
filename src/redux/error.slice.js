import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    message: null,
    isError: false,
  },
  reducers: {
    setError(state, action) {
      const message = action.payload;
      state.message = message;
      state.isError = true;
    },
    closeError(state) {
      state.message = null;
      state.isError = false;
    },
  },
});

export const { setError, closeError } = errorSlice.actions;
export default errorSlice.reducer;
