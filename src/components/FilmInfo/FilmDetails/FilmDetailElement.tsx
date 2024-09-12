import { Box, Typography } from "@mui/material";

interface FilmDetailElementProps {
    title: string;
    value: string;
}

function FilmDetailElement({ title, value }: FilmDetailElementProps) {
    return (
        <Box display='flex' alignItems='center' borderBottom='3px solid #c7f9cc' mb='10px'>
            <Typography variant='subtitle1' width='250px' fontSize='20px'>
                {title}
            </Typography>
            <Typography variant='body1' fontSize='20px'>
                {value}
            </Typography>
        </Box>
    )
}

export default FilmDetailElement;