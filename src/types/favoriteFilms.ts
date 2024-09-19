import { Film } from "./films";

export interface FavoriteFilmsState {
    list: Film[];
    isLoading: boolean;
    error: string | null;
}

export enum FavoriteFilmsActionTypes {
    GET_FAVORITE_FILMS = 'GET_FAVORITE_FILMS',
    GET_FAVORITE_FILMS_SUCCESS = 'GET_FAVORITE_FILMS_SUCCESS',
    GET_FAVORITE_FILMS_ERROR = 'GET_FAVORITE_FILMS_ERROR'
}

interface GetFavoriteFilmsAction {
    type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS;
}

interface GetFavoriteFilmsSuccessAction {
    type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_SUCCESS;
    favoriteFilms: Film[];
}

interface GetFavoriteFilmsErrorAction {
    type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_ERROR;
    error: string;
}

export type FavoriteFilmsActions = GetFavoriteFilmsAction | GetFavoriteFilmsSuccessAction | GetFavoriteFilmsErrorAction;