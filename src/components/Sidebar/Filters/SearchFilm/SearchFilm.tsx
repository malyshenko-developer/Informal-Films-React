import { useCallback } from "react";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";
import { TEXTS } from "../../../../constants";
import { TextField } from "@mui/material";

const SearchFilm = () => {
    const { search } = useFilters();
    const dispatch = useFiltersDispatch();

    const handleChangeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.currentTarget.value;

        dispatch({
            type: 'searched',
            search: currentSearch
        })
    }, [dispatch]);

    return (
        <TextField
            fullWidth
            size='small'
            label={TEXTS.SEARCH_FILMS}
            value={search}
            onChange={handleChangeSearch}
        />
    );
}

export default SearchFilm;