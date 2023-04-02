import { createSlice } from "@reduxjs/toolkit";
import { ResfreshSate } from "../../../types/global.t";

// initial state for data buymank
const initialState: ResfreshSate = {
  refresh: 1,
};

// slicer
export const refreshSlice = createSlice({
  name: "refresh",
  initialState: initialState,
  reducers: {
    refreshing: (state, action) => {
      state.refresh = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { refreshing } = refreshSlice.actions;

//slice exported
export default refreshSlice.reducer;
