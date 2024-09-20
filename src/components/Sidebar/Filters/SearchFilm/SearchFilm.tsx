import { TEXTS } from "../../../../constants";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { SelectSearchValue } from "../../../../store/selectors/filters/selectSearchValue";
import { filtersSlice } from "../../../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../../../hooks/redux";

const SearchFilm = () => {
    const search = useSelector(SelectSearchValue);

    const dispatch = useAppDispatch();
    const { setSearch } = filtersSlice.actions;

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.currentTarget.value;

        dispatch(setSearch(currentSearch));
    }

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