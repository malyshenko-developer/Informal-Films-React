interface IAuth {
    token: string;
    accountId: number;
}

type TAuthAction = 
    | { type: 'settedToken', token: string}
    | { type: 'settedAccountId', accountId: number }

interface IHomePageInfo {
    countPages: number;
}

type TCountPagesAction =
    | { type: 'settedCountPages', countPages: number }

export type { IAuth, TAuthAction, IHomePageInfo, TCountPagesAction }