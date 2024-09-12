interface IAuth {
    token: string;
    accountId: number;
}

type TAuthAction = 
    | { type: 'settedToken', token: string}
    | { type: 'settedAccountId', accountId: number }

export type { IAuth, TAuthAction }