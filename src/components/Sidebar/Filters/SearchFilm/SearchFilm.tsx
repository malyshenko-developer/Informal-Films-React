import { TEXTS } from "../../../../constants";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { SelectSearchValue } from "../../../../store/selectors/selectSearchValue";
import { useActions } from "../../../../hooks/useActions";

const SearchFilm = () => {
    const search = useSelector(SelectSearchValue);
    const { setSearch } = useActions();

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.currentTarget.value;

        setSearch(currentSearch);
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