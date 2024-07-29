import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import SelectSort from "./SelectSort/SelectSort";
import SelectYears from "./SelectYears/SelectYears";
import SelectGenres from "./SelectGenres/SelectGenres";
import { useFiltersDispatch } from "./FiltersContext";

function Filters() {
    const dispatch = useFiltersDispatch();

    const handleClickReset = () => {
        dispatch({
            type: 'reseted'
        })
    }

    return (
        <Box component='form'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Typography component='h2' fontSize='20px'>Фильтры</Typography>
                <IconButton onClick={handleClickReset}>
                    <ClearIcon />
                </IconButton>
            </Box>
            <SelectSort />
            <SelectYears />
            <SelectGenres />
        </Box>
    )
}

export default Filters;