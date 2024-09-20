import Cookies from "js-cookie"
import { COOKIES_NAMES } from "../../constants"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
    token: string | undefined;
    accountId: string | undefined;
}

const initialState: AuthState = {
    token: Cookies.get(COOKIES_NAMES.TOKEN),
    accountId: Cookies.get(COOKIES_NAMES.ACCOUNT_ID)
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },

        setAccountId(state, action: PayloadAction<string>) {
            state.accountId = action.payload;
        }
    }
});

export const authReducer = authSlice.reducer;