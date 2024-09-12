import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Films from "../components/Films/Films";
import { FiltersProvider } from "../contexts/filters";

function HomePage() {
  return (
    <Box display='flex' p='20px' justifyContent='space-between' alignItems='start'>
      <FiltersProvider>
        <Sidebar />
        <Films />
      </FiltersProvider>
    </Box>
  )
}

export default HomePage;