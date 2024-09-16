import { MenuItem, TextField } from "@mui/material";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";
import { memo } from "react";

const sortedOptions = [
    {
        name: 'popular',
        label: 'Популярным'
    },
    {
        name: 'top_rated',
        label: 'Рейтингу'
    }
];

const SelectSort = () => {
    const sorted = useFilters().sort;
    const dispatch = useFiltersDispatch();

    const handleChangeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'sorted',
            sort: e.target.value
        })
    }

    return (
        <TextField
            select
            label='Сортировать по:'
            fullWidth
            margin='normal'
            variant='standard'
            value={sorted}
            onChange={handleChangeSort}
        >
            {
                sortedOptions.map(option => (
                    <MenuItem key={option.name} value={option.name}>
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}

export default memo(SelectSort);