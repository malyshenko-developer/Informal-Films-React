import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { filtersReducer } from "./reducers/filtersSlice";
import { favoriteFilmsReducer } from "./reducers/favoriteFilmsSlice";
import { filmsReducer } from "./reducers/filmsSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    filters: filtersReducer,
    films: filmsReducer,
    favorteFilms: favoriteFilmsReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];