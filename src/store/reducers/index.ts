import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filtersReducer } from "./filtersReducer";
import { filmsReducer } from "./filmsReducer";
import { favoriteFilmsReducer } from "./favoriteFilmsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    filters: filtersReducer,
    films: filmsReducer,
    favorteFilms: favoriteFilmsReducer
});

export type RootState = ReturnType<typeof rootReducer>;