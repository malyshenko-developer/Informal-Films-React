import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import { useState } from "react";
import { Link } from "react-router-dom";
import { TEXTS } from "../../../constants";
import { fetchFavoriteFilm } from "../../../api-films/api";
import { useAuth } from "../../../contexts/auth";

interface CardFilmsProps {
    name: string;
    image: string;
    reting: number;
    id: number;
    isFavorite: boolean;
}

const CardFilm = ({ name, image, reting, id, isFavorite }: CardFilmsProps) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isFavoriteCurrent, setIsFavoriteCurrent ] = useState(isFavorite);
    const imageStyle = isLoading ? { display: 'none' } : {};

    const { accountId } = useAuth();

    const handleLoadingPoster = () => {
        setIsLoading(!isLoading);
    }

    const handleSetFavoriteFilm = async () => {
        setIsFavoriteCurrent(!isFavoriteCurrent);
        
        try {
            await fetchFavoriteFilm(accountId, id, isFavoriteCurrent);
        } catch(error: any) {
            setIsFavoriteCurrent(!!isFavoriteCurrent);
        }
    }

    return (
        <Paper sx={{width: '296px'}} elevation={10}>
            <Card>
                <Link to={`/Informal-Films-React/film/${id}`} state={{ isFavorite: isFavoriteCurrent, id }}>
                    <CardActionArea>
                        {
                            isLoading && (
                                <Skeleton animation='wave' variant='rectangular' width='100%' height='240px' sx={{bgcolor: '#57cc99'}} />
                            )
                        }
                        <CardMedia
                            component='img'
                            height='240px'
                            width='100%'
                            image={'https://image.tmdb.org/t/p/w400' + image}
                            alt='img film'
                            onLoad={handleLoadingPoster}
                            sx={imageStyle}
                        />
                    </CardActionArea>
                </Link>
                <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant='h5' fontSize='20px'>{name}</Typography>
                        <Typography fontSize='15px'>{TEXTS.RETING} {reting}</Typography>
                    </Box>
                    <IconButton color={ isFavoriteCurrent ? 'warning' : 'default' } onClick={handleSetFavoriteFilm}>
                        <GradeIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Paper>
    )
}

export default CardFilm;