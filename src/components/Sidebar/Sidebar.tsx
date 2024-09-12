import { Box, Paper } from "@mui/material";
import Filters from "./Filters/Filters";
import PaginationFilms from "./PaginationFilms/PaginationFilms";

const SIDEBAR_STYLE = {
    component: 'aside',
    bgcolor: 'Background',
    p: '20px',
    borderRadius: '10px',
    width: '400px',
    minHeight:'800px',
    display:'flex',
    flexDirection: 'column'
}

function Sidebar() {
    return (
        <Paper elevation={10}>
            <Box sx={SIDEBAR_STYLE}>
                <Filters />
                <PaginationFilms />
            </Box>
        </Paper>
    )
}

export default Sidebar;