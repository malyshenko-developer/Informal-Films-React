import { Box, Paper } from "@mui/material";
import Filters from "./Filters/Filters";
import { FiltersProvider } from "./Filters/FiltersContext";

function Sidebar() {
    return (
        <Paper elevation={10}>
            <Box component='aside' bgcolor='Background' p='20px' borderRadius='10px' width='400px' minHeight='800px'>
                <FiltersProvider>
                    <Filters />
                </FiltersProvider>
            </Box>
        </Paper>
    )
}

export default Sidebar;