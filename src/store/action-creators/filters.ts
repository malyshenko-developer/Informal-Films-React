import { FiltersActionTypes, SortedTypes } from "../../types/filters";

export const resetFilters = () => ({
    type: FiltersActionTypes.RESET
});

export const setSearch = (search: string) => ({
    type: FiltersActionTypes.SEARCH,
    search
});

export const changeGenres = (genresIds: number[]) => ({
    type: FiltersActionTypes.SELECT_GENRE,
    genresIds
});

export const setPage = (page: number) => {
    return {
        type: FiltersActionTypes.SELECT_PAGE,
        page
    }
}

export const setYears = (newYears: number | number[]) => ({
    type: FiltersActionTypes.SELECT_YEARS,
    newYears
});

export const setSort = (sort: SortedTypes) => ({
    type: FiltersActionTypes.SORT,
    sort
})

export const setCountPages = (countPages: number) => ({
    type: FiltersActionTypes.UPDATE_COUNT_PAGES,
    countPages
})