import { Dispatch } from "redux";
import { FavoriteFilmsActions, FavoriteFilmsActionTypes } from "../../types/favoriteFilms";
import { getFavoriteFilms } from "../../api-films/api";

export const getFavoriteFilmsResponse = (accountId: string) => {
    return async (dispatch: Dispatch<FavoriteFilmsActions>) => {
        try {
            dispatch({ type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS });

            const favoriteFilmsResponse = await getFavoriteFilms(accountId);            

            dispatch({
                type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_SUCCESS, favoriteFilms: favoriteFilmsResponse
            });
        } catch (error: any) {
            dispatch({
                type: FavoriteFilmsActionTypes.GET_FAVORITE_FILMS_ERROR, error: error.message
            });
        }
    }
 }