import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers"; // Gets the State from the reducer(s)
const loggerMiddleware = createLogger();

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
); // Creates the store from the State received from the reducer(s)

export default store;
