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