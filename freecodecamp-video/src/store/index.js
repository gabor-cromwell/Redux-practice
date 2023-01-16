import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 }, action) => {
  if (action.type === "Increment") {
    return { counter: state.counter + action.payload };
  }
  if (action.type === "Decrement") {
    return { counter: state.counter + action.payload };
  }
  return state;
};
const store = createStore(reducerFunction);

export default store;
