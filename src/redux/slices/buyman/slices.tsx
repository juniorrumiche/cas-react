import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuymanProps, BuymanState } from "../../../types/buyman.t";

// initial state for data buymank
const initialState: BuymanState = {};

// slicer
export const buymanSlice = createSlice({
  name: "buyman",
  initialState: initialState,
  reducers: {
    setBuymans: (state, action: PayloadAction<BuymanProps>) => {
      state.buyman = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = buymanSlice.actions;

//slice exported
export default buymanSlice.reducer;
