import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const initialstate = {};

export const store = createStore(
  rootReducer,
  initialstate,
  applyMiddleware(thunk)
);
