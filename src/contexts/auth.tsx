import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import { COOKIES_NAMES } from "../constants";
import { IAuth, TAuthAction } from "./types";

const initialAuth: IAuth = {
    token: Cookies.get(COOKIES_NAMES.TOKEN) || '',
    accountId: Number(Cookies.get(COOKIES_NAMES.ACCOUNT_ID))
}

const AuthContext = createContext<IAuth | null>(initialAuth);
const AuthDispatchContext = createContext<React.Dispatch<TAuthAction> | null>(null);

export const AuthProvider = ({ children } : { children: React.ReactNode }) => {
    const [ auth, dispatch ] = useReducer(
        authReducer,
        initialAuth
    );

    return (
        <AuthContext.Provider value={auth}>
            <AuthDispatchContext.Provider value={dispatch}>
                { children }
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error('authContext error');
    }

    return auth;
}

export const useAuthDispatch = () => {
    const dispatch = useContext(AuthDispatchContext);

    if (!dispatch) {
        throw new Error('authDispatchContext erorr');
    }

    return dispatch;
}

const authReducer = (auth: IAuth, action: TAuthAction) => {
    switch (action.type) {
        case 'settedToken': {
            return {
                ...auth,
                token: action.token
            }
        }

        case 'settedAccountId': {
            return {
                ...auth,
                accoundId: action.accountId
            }
        }
    }
}