import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./features/signup/signupSlice";
export const store = configureStore({
  reducer: {
    signup: signupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

