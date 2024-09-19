import { FavoriteFilmsActions, FavoriteFilmsActionTypes, FavoriteFilmsState } from "../../types/favoriteFilms"

const initialState: FavoriteFilmsState = {
    list: [],
    isLoading: false,
    error: null
}

export const favoriteFilmsReducer = (state = initialState, action: FavoriteFilmsActions): FavoriteFilmsState => {
    switch (action.type) {
        case FavoriteFilmsActionTypes.GET_FAVORITE_FILMS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_SUCCESS: {            
            return {
                ...state,
                isLoading: false,
                list: action.favoriteFilms
            }
        }

        case FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }

        default: {
            return state
        };
    }
}