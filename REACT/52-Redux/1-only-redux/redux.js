import { legacy_createStore as createStore } from "redux";

const redux = require("redux");

const reducer = (store, action) => {
  return store;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};


store.subscribe(subscriber);
