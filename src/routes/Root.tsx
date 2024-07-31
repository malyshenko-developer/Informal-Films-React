import { Box } from "@mui/material";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <Box width='100%' bgcolor='#c7f9cc' minHeight='100vh'>
            <Header />
            <Outlet />
        </Box>
    )
}

export default Root;