export enum SortedTypes {
    POPULAR = 'popularity',
    TOP_RATED = 'vote_count'
}

export interface FiltersState {
    search: string;
    sort: SortedTypes;
    years: number | number[];
    genresIds: number[];
    currentPage: number;
    countPages: number;
}

export enum FiltersActionTypes {
    SEARCH = 'search',
    SORT = 'sort',
    RESET = 'reset',
    SELECT_YEARS = 'selectYears',
    SELECT_GENRE = 'selectGenre',
    SELECT_PAGE = 'selectPage',
    UPDATE_COUNT_PAGES = 'updateCountPages'
}

interface SearchAction {
    type: FiltersActionTypes.SEARCH;
    search: string;
}

interface SortAction {
    type: FiltersActionTypes.SORT;
    sort: SortedTypes;
}

interface ResetAction {
    type: FiltersActionTypes.RESET;
}

interface SelectYearsAction {
    type: FiltersActionTypes.SELECT_YEARS;
    newYears: number | number[];
}

interface SelectGenreAction {
    type: FiltersActionTypes.SELECT_GENRE;
    genresIds: number[];
}

interface SelectPageAction {
    type: FiltersActionTypes.SELECT_PAGE;
    page: number;
}

interface UpdateCountPagesAction {
    type: FiltersActionTypes.UPDATE_COUNT_PAGES;
    countPages: number;
}

export type FiltersActions = SearchAction | SortAction | ResetAction | SelectYearsAction | SelectGenreAction | SelectPageAction | UpdateCountPagesAction;