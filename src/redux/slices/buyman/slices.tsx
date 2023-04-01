import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuymanProps, BuymanState } from "../../../types/buyman.t";

// initial state for data buymank
const initialState: BuymanState = {
  buyman: [],
};

// slicer
export const buymanSlice = createSlice({
  name: "buyman",
  initialState: initialState,
  reducers: {
    setBuymans: (state, action: PayloadAction<Array<BuymanProps>>) => {
      state.buyman = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBuymans } = buymanSlice.actions;

//slice exported
export default buymanSlice.reducer;
