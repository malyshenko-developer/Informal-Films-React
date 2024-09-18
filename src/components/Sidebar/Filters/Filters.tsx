import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import SelectSort from "./SelectSort/SelectSort";
import SelectYears from "./SelectYears/SelectYears";
import SelectGenres from "./SelectGenres/SelectGenres";
import { TEXTS } from "../../../constants";
import SearchFilm from "./SearchFilm/SearchFilm";
import { useActions } from "../../../hooks/useActions";

function Filters() {
    const { resetFilters } = useActions();

    const handleClickReset = () => {
        resetFilters();
    }

    return (
        <Box component='form'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Typography component='h2' fontSize='20px'>{TEXTS.FILTERS}</Typography>
                <IconButton onClick={handleClickReset}>
                    <ClearIcon />
                </IconButton>
            </Box>
            <SearchFilm />
            <SelectSort />
            <SelectYears />
            <SelectGenres />
        </Box>
    )
}

export default Filters;