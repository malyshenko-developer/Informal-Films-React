import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "../../api-films/api";
import { FiltersState } from "../../types/filters";
import { filtersSlice } from "../reducers/filtersSlice";

 export const fetchFilms = createAsyncThunk(
    'films/getAllByFilters',
    async (filters: FiltersState, thunkAPI) => {
        try {
            const filmsResponse = await getFilms(filters);

            thunkAPI.dispatch(filtersSlice.actions.setCountPages(filmsResponse?.total_pages!));

            return filmsResponse?.results;
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
 )