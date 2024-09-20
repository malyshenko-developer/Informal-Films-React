import { MenuItem, TextField } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectSort } from "../../../../store/selectors/filters/selectSort";
import { SortedTypes } from "../../../../types/filters";
import { filtersSlice } from "../../../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../../../hooks/redux";

const sortedOptions = [
    {
        name: SortedTypes.POPULAR,
        label: 'Популярным'
    },
    {
        name: SortedTypes.TOP_RATED,
        label: 'Рейтингу'
    }
];

const SelectSort = () => {
    const sorted = useSelector(selectSort);

    const dispatch = useAppDispatch();
    const { setSort } = filtersSlice.actions;

    const handleChangeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSort(e.target.value as SortedTypes));
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