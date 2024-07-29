import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HEADER_STYLE = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '10px 20px', backgroundColor: '#57cc99' };

function Header() {
    return (
      <Box component='header' sx={HEADER_STYLE}>
        <Typography variant="h1" fontSize='32px' color='black' fontWeight='500'>
            Informal Films
        </Typography>
        <IconButton size='large'>
            <AccountCircleIcon fontSize='large' />
        </IconButton>
      </Box>
    )
  }
  
  export default Header;
  