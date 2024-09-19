import { Dispatch } from "redux"
import { AuthActions, AuthActionTypes } from "../../types/auth"

export const setToken = (token: string) => {
    return (dispatch: Dispatch<AuthActions>) => {
        dispatch({
            type: AuthActionTypes.SET_TOKEN,
            token
        });
    }
}

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<AuthActions>) => {
        dispatch({
            type: AuthActionTypes.SET_ACCOUNT_ID,
            accountId
        });
    }
}