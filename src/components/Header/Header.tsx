import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TEXTS } from "../../constants";
import { HEADER_STYLE } from "./Header.style";

interface HeaderProps {
  changeSignUpSeen: () => void;
  token: string;
}

function Header({ changeSignUpSeen, token }: HeaderProps) {
  return (
    <>
      <Box component='header' sx={HEADER_STYLE}>
        <Typography variant="h1" fontSize='32px' color='black' fontWeight='500'>
          { TEXTS.PROJECT_NAME }
        </Typography>
        <IconButton size='large' onClick={changeSignUpSeen} disabled={!!token}>
            <AccountCircleIcon fontSize='large' />
        </IconButton>
      </Box>

    </>
  )
}
  
  export default Header;
  