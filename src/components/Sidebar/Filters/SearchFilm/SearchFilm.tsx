import { TextField } from "@mui/material";
import React from "react";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";

const SearchFilm = () => {
    const filters = useFilters();
    const dispatch = useFiltersDispatch();

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.currentTarget.value;

        dispatch({
            type: 'searched',
            search: currentSearch
        })
    }

    return (
        <TextField
            fullWidth
            size='small'
            label='Название фильма'
            value={filters.search}
            onChange={handleChangeSearch}
        />
    )
}

export default SearchFilm;