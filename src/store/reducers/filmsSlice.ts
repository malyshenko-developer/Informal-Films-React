import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Film, FilmsState } from "../../types/films"
import { fetchFilms } from "../action-creators/films";

const initialState: FilmsState = {
    list: [],
    isLoading: false,
    error: null
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFilms.fulfilled.type, (state, action: PayloadAction<Film[]>) => {
            console.log(action.payload);
            
            state.isLoading = false;
            state.list = action.payload;
        }),
        builder.addCase(fetchFilms.pending.type, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchFilms.rejected.type, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })

    },
});

export const filmsReducer = filmsSlice.reducer;