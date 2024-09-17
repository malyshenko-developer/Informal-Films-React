import { createContext, useContext, useReducer } from "react";
import { IHomePageInfo, TCountPagesAction } from "../actions/types";

const INITIAL_HOME_PAGE_INFO = {
    countPages: 400
};

const HomePageInfoContext = createContext(INITIAL_HOME_PAGE_INFO);
const HomePageInfoDispatchContext = createContext<React.Dispatch<TCountPagesAction> | null>(null);

export const HomePageInfoProvider = ({ children }: { children: React.ReactNode }) => {
    const [ homePageInfo, dispatch ] = useReducer(
        homePageInfoReducer,
        INITIAL_HOME_PAGE_INFO
    );

    return (
        <HomePageInfoContext.Provider value={homePageInfo}>
            <HomePageInfoDispatchContext.Provider value={dispatch}>
                { children }
            </HomePageInfoDispatchContext.Provider>
        </HomePageInfoContext.Provider>
    )
}

export const useHomePageInfo = () => {
    const homePageInfo = useContext(HomePageInfoContext);

    if (!homePageInfo) {
        throw new Error('homePageInfoContext error');
    }

    return homePageInfo;
}

export const useHomePageInfoDispatch = () => {
    const dispatch = useContext(HomePageInfoDispatchContext);

    if (!dispatch) {
        throw new Error('homePageInfoDispatchContext error');
    }

    return dispatch;
}

const homePageInfoReducer = (homePageInfo: IHomePageInfo, action: TCountPagesAction) => {
    switch(action.type) {
        case 'settedCountPages': {
            const currentCountPages = action.countPages;

            return {
                ...homePageInfo,
                countPages:  currentCountPages > 400 ? INITIAL_HOME_PAGE_INFO.countPages : currentCountPages
            }
        }
    }
}