import { Box } from "@mui/material";
import CardFilm from "./CardFilm/CardFilm";
import { useEffect, useState } from "react";
import { IFilm } from "../../interfaces/interfaces";
import { getFavoriteFilms, getFilms } from "../../api-films/api";
import { useFilters } from "../../contexts/filters";
import { FILMS_STYLE } from "./Films.style";
import { useAuth } from "../../contexts/auth";
import { useHomePageInfoDispatch } from "../../contexts/home-page-info";

function Films() {
    const homePageInfoDispatch = useHomePageInfoDispatch();
    const [ films, setFilms ] = useState<IFilm[]>([]);
    const [ favoriteFilms, setFavoriteFilms ] = useState<IFilm[]>([]);
    const filters = useFilters();
    const { accountId } = useAuth();

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const filmsData = await getFilms(filters);
            homePageInfoDispatch({
                type: 'settedCountPages',
                countPages: filmsData?.total_pages!
            });

            const favoriteFilmsData = await getFavoriteFilms(accountId);

            if (!ignore) {
                setFilms(filmsData?.results!);
                setFavoriteFilms(favoriteFilmsData);
            }
        }

        fetchAPI();
        
        return () => { ignore = true }
    }, [filters]);

    return (
        <Box sx={FILMS_STYLE}>
            {        
                films.map(film => {
                    const isFavorite = !!favoriteFilms.find(favoriteFilm => favoriteFilm.id === film.id);   

                    return (
                        <CardFilm key={film.id} image={film.backdrop_path} name={film.title} reting={film.vote_average} id={film.id} isFavorite={isFavorite} />
                    )
                    }  
                )
            }
        </Box>
    )
}

export default Films;
