import Cookies from "js-cookie"
import { COOKIES_NAMES } from "../../constants"
import { AuthActions, AuthActionTypes, AuthState } from "../../types/auth"

const initialState: AuthState = {
    token: Cookies.get(COOKIES_NAMES.TOKEN),
    accountId: Cookies.get(COOKIES_NAMES.ACCOUNT_ID)
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }

        case AuthActionTypes.SET_ACCOUNT_ID: {
            return {
                ...state,
                accountId: action.accountId
            }
        }

        default: {
            return state;
        }
    }
}