import { Box, Pagination } from "@mui/material";
import { useFilters, useFiltersDispatch } from "../../../contexts/filters";
import { useHomePageInfo } from "../../../contexts/home-page-info";

const PAGINATION_FILMS_STYLE = {
    mt: 'auto',
    display: 'flex',
    justifyContent: 'center'
}

function PaginationFilms() {
    const { countPages } = useHomePageInfo();
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
            <Pagination color='primary' count={countPages} page={page} onChange={handleChangePage} />
        </Box>
    )
}

export default PaginationFilms;