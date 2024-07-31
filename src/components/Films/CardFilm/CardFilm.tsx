import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardFilmsProps {
    name: string;
    image: string;
    reting: number;
    id: number;
}

function CardFilm({ name, image, reting, id }: CardFilmsProps) {
    const [ isLoad, setIsLoad ] = useState(true);
    const imageStyle = isLoad ? { display: 'none' } : {};

    const handleLoadPoster = () => {
        setIsLoad(!isLoad);
    }

    return (
        <Paper sx={{width: '296px'}} elevation={10}>
            <Card>
                <Link to={`/Informal-Films-React/film/${id}`}>
                    <CardActionArea>
                        {
                            isLoad && (
                                <Skeleton animation='wave' variant='rectangular' width='100%' height='240px' sx={{bgcolor: '#57cc99'}} />
                            )
                        }
                        <CardMedia
                            component='img'
                            height='240px'
                            width='100%'
                            image={'https://image.tmdb.org/t/p/w400' + image}
                            alt='img film'
                            onLoad={handleLoadPoster}
                            sx={imageStyle}
                        />
                    </CardActionArea>
                </Link>
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