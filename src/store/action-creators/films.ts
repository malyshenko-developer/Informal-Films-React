import { Dispatch } from "redux";
import { FilmsActions, FilmsActionTypes } from "../../types/films"
import { getFilms } from "../../api-films/api";
import { FiltersActions, FiltersActionTypes, FiltersState } from "../../types/filters";

export const getFilmsResponse = (filters: FiltersState) => {
    return async (dispatch: Dispatch<FilmsActions|FiltersActions>) => {
        try {
            dispatch({ type: FilmsActionTypes.GET_FILMS });

            const filmsResponse = await getFilms(filters);

            dispatch({
                type: FilmsActionTypes.GET_FILMS_SUCCESS, films: filmsResponse?.results!
            });
            dispatch({
                type: FiltersActionTypes.UPDATE_COUNT_PAGES, countPages: filmsResponse?.total_pages!
            });
        } catch (error: any) {
            dispatch({
                type: FilmsActionTypes.GET_FILMS_ERROR, error: error.message
            });
        }
    }
 }