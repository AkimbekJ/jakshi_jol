import { createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { applyMiddleware } from "redux";

const store = createStore(reducer,applyMiddleware(thunk))

export default store;