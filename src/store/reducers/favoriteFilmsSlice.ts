import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FavoriteFilmsState } from "../../types/favoriteFilms"
import { Film } from "../../types/films";
import { fetchFavoriteFilms } from "../action-creators/favoriteFilms";

const initialState: FavoriteFilmsState = {
    list: [],
    isLoading: false,
    error: null
}

export const favoriteFilmsSlice = createSlice({
    name: 'favoriteFilms',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFavoriteFilms.pending.type, (state) => {
            state.isLoading = true;
        }),

        builder.addCase(fetchFavoriteFilms.fulfilled.type, (state, action: PayloadAction<Film[]>) => {
            state.list = action.payload;
            state.isLoading = false;
        }),

        builder.addCase(fetchFavoriteFilms.rejected.type, (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    },
})

export const favoriteFilmsReducer = favoriteFilmsSlice.reducer;