import { Dispatch } from "redux";
import { FiltersActions, FiltersActionTypes, SortedTypes } from "../../types/filters";

export const resetFilters = () => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.RESET
        })
    }
};

export const setSearch = (search: string) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.SEARCH,
            search
        });
    }
};

export const changeGenres = (genresIds: number[]) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.SELECT_GENRE,
            genresIds
        });
    }
};

export const setPage = (page: number) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.SELECT_PAGE,
            page
        });
    }
}

export const setYears = (newYears: number | number[]) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.SELECT_YEARS,
            newYears
        });
    }
};

export const setSort = (sort: SortedTypes) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.SORT,
            sort,
            page: 1
        });
    }
}

export const setCountPages = (countPages: number) => {
    return (dispatch: Dispatch<FiltersActions>) => {
        dispatch({
            type: FiltersActionTypes.UPDATE_COUNT_PAGES,
            countPages
        });
    }
}