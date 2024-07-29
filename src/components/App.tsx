import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import Films from "./Films/Films";
import { FiltersProvider } from "./Sidebar/Filters/FiltersContext";

function App() {
  return (
    <>
      <CssBaseline />
      <Box width='100%' bgcolor='#c7f9cc' minHeight='100vh'>
        <Header />
        <Box display='flex' p='20px' justifyContent='space-between' alignItems='start'>
          <FiltersProvider>
            <Sidebar />
            <Films />
          </FiltersProvider>
        </Box>
      </Box>
    </>
  )
}

export default App;