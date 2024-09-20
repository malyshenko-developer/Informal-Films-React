import { Box, Slider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectYears } from "../../../../store/selectors/filters/selectYears";
import { filtersSlice } from "../../../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../../../hooks/redux";

const range = {
    min: 1900,
    max: new Date().getFullYear()
}

function SelectYears() {
    const selectedYears = useSelector(selectYears);

    const dispatch = useAppDispatch();
    const { setYears } = filtersSlice.actions;

    const handleChange = (event: Event, newYears: number | number[]) => {
        event.preventDefault();
        
        dispatch(setYears(newYears));
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