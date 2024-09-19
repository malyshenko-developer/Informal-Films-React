import { FilmsActions, FilmsActionTypes, FilmsState } from "../../types/films"

const initialState: FilmsState = {
    list: [],
    isLoading: false,
    error: null
}

export const filmsReducer = (state = initialState, action: FilmsActions): FilmsState => {
    switch (action.type) {
        case FilmsActionTypes.GET_FILMS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case FilmsActionTypes.GET_FILMS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                list: action.films
            }
        }

        case FilmsActionTypes.GET_FILMS_ERROR: {
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