import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filtersReducer } from "./filtersReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    filters: filtersReducer
});

export type RootState = ReturnType<typeof rootReducer>;