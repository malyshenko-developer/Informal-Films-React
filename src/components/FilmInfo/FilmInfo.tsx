import { Box, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { IFilmCredits, IFilmDetails } from '../../interfaces/interfaces';
import FilmDetails from './FilmDetails/FilmDetails';
import FilmCast from './FilmCast';
import { Link, useLocation } from 'react-router-dom';
import { TEXTS } from '../../constants';
import { useState } from 'react';
import { fetchFavoriteFilm } from '../../api-films/api';
import { useAuth } from '../../contexts/auth';

interface FilmInfoProps {
    detailsData: IFilmDetails;
    creditsData: IFilmCredits;
    id: number;
}

function FilmInfo({ detailsData, creditsData, id } : FilmInfoProps) {
    const { accountId } = useAuth();

    const location = useLocation();
    const { isFavorite } = location.state;

    const [ isFavoriteCurrent, setIsFavoriteCurrent ] = useState(isFavorite);

    const handleSetFavoriteFilm = async () => {
        const responseFavorite = await fetchFavoriteFilm(accountId, id, isFavoriteCurrent);
        setIsFavoriteCurrent(responseFavorite);
    }

    return (
        <Box ml='25px' display='flex' flexDirection='column' alignItems='flex-start' width='100%'>
            <CardActions sx={{p: '0', mb: '10px', display: 'flex', alignItems:'center'}}>
                <Link to='/Informal-Films-React/'>
                    <IconButton size='large'>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
                <Typography variant='h3'>
                    { detailsData.title }
                </Typography>
                <IconButton size='large' color={ isFavoriteCurrent ? 'warning' : 'default' } onClick={handleSetFavoriteFilm}>
                    <StarIcon />
                </IconButton>
            </CardActions>
            <CardContent sx={{display: 'flex', gap: '200px'}}>
                <FilmDetails details={detailsData} crew={creditsData.crew} />
                <FilmCast cast={creditsData.cast} />
            </CardContent>
            <CardContent sx={{fontSize: '20px', textAlign: 'justify'}}>
                <Typography variant='h5' fontSize='25px' mb='10px'>
                    { TEXTS.DESCRIPTION }
                </Typography>
                {detailsData.overview}
            </CardContent>
        </Box>
    )
}

export default FilmInfo;