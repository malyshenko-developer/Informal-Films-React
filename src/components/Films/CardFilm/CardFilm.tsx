import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Paper, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface CardFilmsProps {
    name: string;
    image: string;
    reting: number;
}

function CardFilm({ name, image, reting }: CardFilmsProps) {
    return (
        <Paper sx={{width: '296px'}} elevation={15}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='240px'
                        width='100%'
                        image={image}
                        alt='img film'
                    />
                </CardActionArea>
                <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant='h5' fontSize='20px'>{name}</Typography>
                        <Typography fontSize='15px'>Рейтинг {reting}</Typography>
                    </Box>
                    <IconButton>
                        <StarBorderIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Paper>
    )
}

export default CardFilm;