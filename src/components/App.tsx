import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import Films from "./Films/Films";

function App() {
  return (
    <>
      <CssBaseline />
      <Box width='100%' bgcolor='#c7f9cc' height='100vh'>
        <Header />
        <Box display='flex' p='0 20px' mt='20px' justifyContent='space-between'>
          <Sidebar />
          <Films />
        </Box>
      </Box>
    </>
  )
}

export default App;