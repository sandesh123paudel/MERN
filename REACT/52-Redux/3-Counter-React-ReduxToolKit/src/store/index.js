import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacyToggle: (state) => {
      return (state = !state);
    },
  },
});

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   let newCounterStore = store;
//   if (action.type === "INCREMENT") {
//     // newCounterStore = {
//     //   counter: store.counter + 1,
//     //   privacy: store.privacy,
//     // };

//     //short solution
//     newCounterStore = { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     // newCounterStore = {
//     //   counter: store.counter - 1,
//     //   privacy: store.privacy,
//     // };

//     //short solution
//     newCounterStore = { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     // newCounterStore = {
//     //   counter: store.counter + action.payload.num,
//     //   privacy: store.privacy,
//     // };

//     //short solution
//     newCounterStore = { ...store, counter: store.counter + action.payload.num };
//   } else if (action.type === "SUBSTRACT") {
//     // newCounterStore = {
//     //   counter: store.counter - action.payload.num,
//     //   privacy: store.privacy,
//     // };

//     //short solution
//     newCounterStore = { ...store, counter: store.counter - action.payload.num };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     // newCounterStore = {
//     //   counter: store.counter,
//     //   privacy: !store.privacy,
//     // };

//     //short solution
//     newCounterStore = { ...store, privacy: !store.privacy };
//   }

//   return newCounterStore;
// };

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;
