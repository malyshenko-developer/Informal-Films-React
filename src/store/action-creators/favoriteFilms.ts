import { getFavoriteFilms } from "../../api-films/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoriteFilms = createAsyncThunk(
    'favoriteFilms/getAll',
    async (accountId: string, thunkAPI) => {
        try {
            const favoriteFilmsResponse = await getFavoriteFilms(accountId);

            return favoriteFilmsResponse;
        } catch(error: any) {
            thunkAPI.rejectWithValue(error.any);
        }
    } 
)