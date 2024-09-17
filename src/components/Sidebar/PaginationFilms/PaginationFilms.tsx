import { Box, Pagination } from "@mui/material";
import { useFilters, useFiltersDispatch } from "../../../contexts/filters";

const PAGINATION_FILMS_STYLE = {
    mt: 'auto',
    display: 'flex',
    justifyContent: 'center'
}

function PaginationFilms() {
    const page = useFilters().page;
    const dispatch = useFiltersDispatch();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        event.stopPropagation();

        dispatch({
            type: 'selectedPage',
            page: value
        })
    }

    return (
        <Box sx={PAGINATION_FILMS_STYLE}>
            <Pagination color='primary' count={400} page={page} onChange={handleChangePage} />
        </Box>
    )
}

export default PaginationFilms;