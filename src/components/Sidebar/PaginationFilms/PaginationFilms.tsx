import { Box, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../../store/selectors/filters/selectCurrentPage";
import { selectCountPages } from "../../../store/selectors/filters/selectCountPages";
import { filtersSlice } from "../../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../../hooks/redux";

const PAGINATION_FILMS_STYLE = {
    mt: 'auto',
    display: 'flex',
    justifyContent: 'center'
}

function PaginationFilms() {
    const currentPage = useSelector(selectCurrentPage);
    const countPages = useSelector(selectCountPages);

    const dispatch = useAppDispatch();
    const { setPage } = filtersSlice.actions;

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        event.stopPropagation();
        
        dispatch(setPage(value));
    }

    return (
        <Box sx={PAGINATION_FILMS_STYLE}>
            <Pagination
                color='primary'
                count={countPages}
                page={currentPage}
                onChange={handleChangePage}
            />
        </Box>
    )
}

export default PaginationFilms;