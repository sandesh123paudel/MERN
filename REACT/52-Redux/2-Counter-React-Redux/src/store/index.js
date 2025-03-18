import { act } from "react";
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newCounterStore = store;
  if (action.type === "INCREMENT") {
    // newCounterStore = {
    //   counter: store.counter + 1,
    //   privacy: store.privacy,
    // };

    //short solution
    newCounterStore = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    // newCounterStore = {
    //   counter: store.counter - 1,
    //   privacy: store.privacy,
    // };

    //short solution
    newCounterStore = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    // newCounterStore = {
    //   counter: store.counter + action.payload.num,
    //   privacy: store.privacy,
    // };

    //short solution
    newCounterStore = { ...store, counter: store.counter + action.payload.num };
  } else if (action.type === "SUBSTRACT") {
    // newCounterStore = {
    //   counter: store.counter - action.payload.num,
    //   privacy: store.privacy,
    // };

    //short solution
    newCounterStore = { ...store, counter: store.counter - action.payload.num };
  } else if (action.type === "PRIVACY_TOGGLE") {
    // newCounterStore = {
    //   counter: store.counter,
    //   privacy: !store.privacy,
    // };

    //short solution
    newCounterStore = { ...store, privacy: !store.privacy };
  }

  return newCounterStore;
};
const counterStore = createStore(counterReducer);

export default counterStore;
