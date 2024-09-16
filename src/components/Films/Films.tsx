import { Box } from "@mui/material";
import CardFilm from "./CardFilm/CardFilm";
import { FILMS_STYLE } from "./Films.style";
import useFilms from "./hooks";

function Films() {
    const [ films, favoriteFilms ] = useFilms();

    return (
        <Box sx={FILMS_STYLE}>
            {        
                films.map(film => {
                    const isFavorite = !!favoriteFilms.find(favoriteFilm => favoriteFilm.id === film.id);   

                    return (
                        <CardFilm key={film.id} image={film.poster_path} name={film.title} reting={film.vote_average} id={film.id} isFavorite={isFavorite} />
                    )
                    }  
                )
            }
        </Box>
    )
}

export default Films;
