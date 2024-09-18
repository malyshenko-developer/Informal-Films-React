import { Box, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../../store/selectors/selectCurrentPage";
import { useActions } from "../../../hooks/useActions";
import { selectCountPages } from "../../../store/selectors/selectCountPages";

const PAGINATION_FILMS_STYLE = {
    mt: 'auto',
    display: 'flex',
    justifyContent: 'center'
}

function PaginationFilms() {
    const currentPage = useSelector(selectCurrentPage);
    const countPages = useSelector(selectCountPages);
    const { setPage } = useActions();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        event.stopPropagation();
        
        setPage(value);
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