import { AuthActionTypes } from "../../types/auth"

export const setToken = (token: string) => {
    return {
        type: AuthActionTypes.SET_TOKEN,
        token
    }
}

export const setAccountId = (accountId: string) => {
    return {
        type: AuthActionTypes.SET_ACCOUNT_ID,
        accountId
    }
}