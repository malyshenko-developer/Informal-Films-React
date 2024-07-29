import { MenuItem, TextField } from "@mui/material";
import { useFilters, useFiltersDispatch } from "../FiltersContext";

const sortedOptions = [
    'Популярным',
    'Алфавиту'
];

function SelectSort() {
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
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}

export default SelectSort;