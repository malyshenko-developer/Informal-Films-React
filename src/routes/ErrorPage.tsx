import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ERROR_PAGE_STYLE = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

function ErrorPage() {
    const error:any = useRouteError();

    return (
        <Box sx={ERROR_PAGE_STYLE}>
            <Typography variant='h3'>
                Упс!
            </Typography>
            <Typography variant='h6'>
                Произошла непредвиденная ошибка, возможно данной страницы не существует
            </Typography>
            <Typography variant='subtitle1'>
                <i>{error.statusText || error.message}</i>
            </Typography>
        </Box>
    )
}

export default ErrorPage;