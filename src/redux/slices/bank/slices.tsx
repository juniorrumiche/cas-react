import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankProps, BankState } from "../../../types/bank.t";

// initial state for data buymank
const initialState: BankState = {
  bank: [],
};

// slicer
export const BankSlice = createSlice({
  name: "buyman",
  initialState: initialState,
  reducers: {
    setBanks: (state, action: PayloadAction<Array<BankProps>>) => {
      state.bank = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBanks } = BankSlice.actions;

//slice exported
export default BankSlice.reducer;
