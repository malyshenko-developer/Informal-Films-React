import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FiltersState, SortedTypes } from "../../types/filters"

const initialState: FiltersState = {
    search: '',
    sort: SortedTypes.POPULAR,
    years: [2000, 2024],
    genresIds: [],
    currentPage: 1,
    countPages: 400
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        reset() {
            return initialState;
        },

        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
            state.currentPage = 1;
        },

        setGenres(state, action: PayloadAction<number[]>) {
            state.genresIds = action.payload;
            state.currentPage = 1;
        },

        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },

        setYears(state, action: PayloadAction<number | number[]>) {
            state.years = action.payload;
        },

        setSort(state, action: PayloadAction<SortedTypes>) {
            state.sort = action.payload;
        },

        setCountPages(state, action: PayloadAction<number>) {
            state.countPages = action.payload > 400 ? initialState.countPages : action.payload;
        }
    }
});

export const filtersReducer = filtersSlice.reducer;