import { createSlice } from "@reduxjs/toolkit";

interface signupSliceState {
  step: number;
}

const initialState: signupSliceState = {
  step: 0,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    increaseStep: (state) => {
      state.step += 1;
    },
    decreaseStep: (state) => {
      state.step -= 1;
    },
  },
});

export default signupSlice.reducer;

export const { increaseStep, decreaseStep } = signupSlice.actions;
