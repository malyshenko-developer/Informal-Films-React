import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Films from "../components/Films/Films";

function HomePage() {
  return (
    <Box display='flex' p='20px' justifyContent='space-between' alignItems='start'>
      <Sidebar />
      <Films />
    </Box>
  )
}

export default HomePage;