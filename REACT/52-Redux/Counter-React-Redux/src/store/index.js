import { act } from "react";
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newCounterStore = store;
  if (action.type === "INCREMENT") {
    newCounterStore = {
      counter: store.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    newCounterStore = {
      counter: store.counter - 1,
    };
  }else if(action.type==="ADD"){
    newCounterStore={
      counter:store.counter + action.payload.num
    }

  }else if(action.type==="SUBSTRACT"){
    newCounterStore={
      counter:store.counter - action.payload.num
    }

  }
  return newCounterStore;
};
const counterStore = createStore(counterReducer);

export default counterStore;
