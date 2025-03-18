import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += action.payload.num;
    },
    subtraction: (state, action) => {
      state.counterVal -= action.payload.num;
    },
  },
});


export default counterSlice;
export const counterActions = counterSlice.actions;
