export interface AuthState {
    token: string | undefined;
    accountId: string | undefined;
}

export enum AuthActionTypes {
    SET_TOKEN = 'SET_TOKEN',
    SET_ACCOUNT_ID = 'SET_ACCOUNT_ID'
}

interface SetTokenAction {
    type: AuthActionTypes.SET_TOKEN;
    token: string;
}

interface SetAccountIdAction {
    type: AuthActionTypes.SET_ACCOUNT_ID;
    accountId: string;
}

export type AuthActions = SetTokenAction | SetAccountIdAction;