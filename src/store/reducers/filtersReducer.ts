import { FiltersActions, FiltersActionTypes, FiltersState, SortedTypes } from "../../types/filters"


const initialState: FiltersState = {
    search: '',
    sort: SortedTypes.POPULAR,
    years: [2000, 2024],
    genresIds: [],
    currentPage: 1,
    countPages: 400
}

export const filtersReducer = (state=initialState, action: FiltersActions) => {
    switch (action.type) {
        case FiltersActionTypes.RESET: {
            return initialState;
        }

        case FiltersActionTypes.SEARCH: {
            return {
                ...state,
                search: action.search,
                currentPage: 1
            };
        }

        case FiltersActionTypes.SELECT_GENRE: {
            return {
                ...state,
                genresIds: action.genresIds,
                currentPage: 1
            };
        }

        case FiltersActionTypes.SELECT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            };
        }

        case FiltersActionTypes.SELECT_YEARS: {
            return {
                ...state,
                years: action.newYears
            };
        }

        case FiltersActionTypes.SORT: {
            return {
                ...state,
                sort: action.sort
            };
        }

        case FiltersActionTypes.UPDATE_COUNT_PAGES: {
            const countPages = action.countPages > 400 ? 400 : action.countPages ;

            return {
                ...state,
                countPages
            };
        }

        default: {
            return state
        }
    }
}