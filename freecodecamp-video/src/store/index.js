// import { createStore } from "redux";

// const reducerFunction = (state = { counter: 0 }, action) => {
//   if (action.type === "Increment") {
//     return { counter: state.counter + action.payload };
//   }
//   if (action.type === "Decrement") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };
// const store = createStore(reducerFunction);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    decrement(state, action) {
      state.counter += action.payload;
    },
    increment(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
