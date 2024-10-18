import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      console.log(action.payload.data);
      state.data = action.payload.data;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure } =
  inventorySlice.actions;
export default inventorySlice.reducer;
