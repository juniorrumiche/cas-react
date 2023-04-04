import { configureStore } from "@reduxjs/toolkit";
import buymanSlice from "./slices/buyman/slices";
import refreshSlice from "./slices/global/slices";
import BankSlice from "./slices/bank/slices";

//store
export const store = configureStore({
  reducer: {
    buymanSlice,
    BankSlice,
    refreshSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
