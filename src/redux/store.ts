import { configureStore } from "@reduxjs/toolkit";
import buymanSlice from "./slices/buyman/slices";

//store
export const store = configureStore({
  reducer: {
    buymanSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
