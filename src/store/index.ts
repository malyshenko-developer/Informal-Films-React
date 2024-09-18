import { createStore } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;