import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
