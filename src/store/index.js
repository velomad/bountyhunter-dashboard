import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import appState from "./slices/appState";

const reducer = combineReducers({
  // here we will be adding reducers
  appState,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
