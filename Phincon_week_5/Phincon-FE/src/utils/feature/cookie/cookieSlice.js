import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
  name: "cookie",
  initialState: {
    value: null,
  },
  reducers: {
    getCookie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getCookie } = cookieSlice.actions;
export default cookieSlice.reducer;
