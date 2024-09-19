import { Box, CircularProgress } from "@mui/material";
import CardFilm from "./CardFilm/CardFilm";
import { FILMS_STYLE } from "./Films.style";
import useFilms from "./hooks";
import { useMemo } from "react";

function Films() {
    const {films, favoriteFilms, filmsLoading, favoriteFilmsLoading} = useFilms();

    const processedFilms = useMemo(() => {
        return films.map(film => ({
            ...film,
            isFavorite: !!favoriteFilms.find(favoriteFilm => favoriteFilm.id === film.id)
        }));
    }, [films, favoriteFilms]);

    if (filmsLoading || favoriteFilmsLoading) {
        return (
            <Box display='flex' width='100%' justifyContent='center' height='80vh' alignItems='center'>
                <CircularProgress size='100px' color='success' />
            </Box>
        )
    }

    return (
        <Box sx={FILMS_STYLE}>
            {        
                processedFilms.map(film => {
                    // const isFavorite = !!favoriteFilms.find(favoriteFilm => favoriteFilm.id === film.id);   

                    return (
                        <CardFilm key={film.id} image={film.poster_path} name={film.title} reting={film.vote_average} id={film.id} isFavorite={film.isFavorite} />
                    )}  
                )
            }
        </Box>
    )
}

export default Films;
