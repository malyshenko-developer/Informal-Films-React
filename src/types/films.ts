export interface Genre {
    name: string;
    id: number;
}

export interface Film {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface FilmsState {
    list: Film[],
    isLoading: boolean;
    error: string | null;
}

export enum FilmsActionTypes {
    GET_FILMS = 'GET_FILMS',
    GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS',
    GET_FILMS_ERROR = 'GET_FILMS_ERROR'
}

interface GetFilmsAction {
    type: FilmsActionTypes.GET_FILMS;
}

interface GetFilmsSuccessAction {
    type: FilmsActionTypes.GET_FILMS_SUCCESS;
    films: Film[];
}

interface GetFilmsErrorAction {
    type: FilmsActionTypes.GET_FILMS_ERROR;
    error: string;
}

export type FilmsActions = GetFilmsAction | GetFilmsSuccessAction | GetFilmsErrorAction;