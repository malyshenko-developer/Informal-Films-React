import React, { createContext, useContext, useReducer } from "react"
import { IFilters } from "../interfaces/interfaces";

type TAction =
    | { type: 'reseted' }
    | { type: 'sorted', sort: string }
    | { type: 'selectedYears', newYears: number | number[] }
    | { type: 'selectedGenre', genresIds: number[] }
    | { type: 'selectedPage', page: number }

const initialFilters: IFilters = {
    sort: 'popular',
    years: [2000, 2024],
    genresIds: [],
    page: 1
}

const FiltersContext = createContext(initialFilters);
const FiltersDispatchContext = createContext<React.Dispatch<TAction> | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
    const [ filters, dispatch ] = useReducer(filtersReducer, initialFilters);

    return (
        <FiltersContext.Provider value={filters}>
            <FiltersDispatchContext.Provider value={dispatch}>
                { children }
            </FiltersDispatchContext.Provider>
        </FiltersContext.Provider>
    )
}

export function useFilters() {
    const filters = useContext(FiltersContext);

    if (!filters) {
        throw Error('Error state');
    }

    return filters;
}

export function useFiltersDispatch() {
    const dispatch = useContext(FiltersDispatchContext);

    if (!dispatch) {
        throw Error('Error dispatch');
    }

    return dispatch;
}

const filtersReducer = (filters: IFilters, action: TAction) => {
    switch (action.type) {
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