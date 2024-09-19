import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";

const middlewareEnhacer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhacer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;