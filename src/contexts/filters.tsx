import React, { createContext, useContext, useReducer } from "react"
import { IFilters } from "../interfaces/interfaces";

type TAction =
    | { type: 'reseted' }
    | { type: 'sorted', sort: string }
    | { type: 'selectedYears', newYears: number | number[] }
    | { type: 'selectedGenre', genresIds: number[] }
    | { type: 'selectedPage', page: number }
    | { type: 'searched', search: string }

const initialFilters: IFilters = {
    search: '',
    sort: 'popular',
    years: [2000, 2024],
    genresIds: [],
    page: 1
}

export const FiltersContext = createContext<IFilters | null>(null);
const FiltersDispatchContext = createContext<React.Dispatch<TAction> | null>(null);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
    const [ filters, dispatch ] = useReducer(filtersReducer, initialFilters);

    return (
        <FiltersContext.Provider value={filters}>
            <FiltersDispatchContext.Provider value={dispatch}>
                { children }
            </FiltersDispatchContext.Provider>
        </FiltersContext.Provider>
    )
}

export const useFilters = () => {
    const filters = useContext(FiltersContext);

    if (!filters) {
        throw Error('Error state');
    }

    return filters;
}

export const useFiltersDispatch = () => {
    const dispatch = useContext(FiltersDispatchContext);

    if (!dispatch) {
        throw Error('Error dispatch');
    }

    return dispatch;
}

const filtersReducer = (filters: IFilters, action: TAction) => {
    switch (action.type) {
        case 'searched':
            return {
                ...filters,
                page: 1,
                search: action.search
            }

        case 'sorted':
            return {
                ...filters,
                page: 1,
                sort: action.sort
            };

        case 'reseted':
            return initialFilters;

        case 'selectedYears':
            return {
                ...filters,
                years: action.newYears
            };
        
        case 'selectedGenre':
            return {
                ...filters,
                page: 1,
                genresIds: action.genresIds
            };

        case 'selectedPage':
            return {
                ...filters,
                page: action.page
            }

        default:
            return filters;
    }
}