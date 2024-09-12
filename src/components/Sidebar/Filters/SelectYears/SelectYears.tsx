import { Box, Slider, Typography } from "@mui/material";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";

const range = {
    min: 1900,
    max: new Date().getFullYear()
}

function SelectYears() {
    const selectedYears = useFilters().years;
    const dispatch = useFiltersDispatch();

    const handleChange = (event: Event, newYears: number | number[]) => {
        event.preventDefault();
        dispatch({
            type: 'selectedYears',
            newYears
        })
    };

    return (
        <Box m='30px 0'>
            <Typography component='h3' fontSize='16px' mb='40px'>Год релиза</Typography>
            <Slider
                valueLabelDisplay='on'
                value={selectedYears}
                onChange={handleChange}
                min={range.min}
                max={range.max}
            />
        </Box>
    )
}

export default SelectYears;