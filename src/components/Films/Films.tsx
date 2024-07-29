import { Box } from "@mui/material";
import CardFilm from "./CardFilm/CardFilm";
import { useEffect, useState } from "react";
import { IFilm } from "../../interfaces";
import { getFilms } from "../../api-films/api";
import { useFilters } from "../Sidebar/Filters/FiltersContext";

const FILMS_STYLE = {
    ml: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    alignItems: 'flex-start',
    height: '800px',
    overflowY: 'scroll',
    p: '0 0 20px 0',
}

function Films() {
    const [ films, setFilms ] = useState<IFilm[]>([]);
    const filters = useFilters();

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const filmsData = await getFilms(filters);

            if (!ignore) {
                setFilms(filmsData?.results!);
            }
        }

        fetchAPI();
        return () => { ignore = true }
    }, [filters])

    return (
        <Box sx={FILMS_STYLE}>
            {
                films.map(film => (
                    <CardFilm key={film.id} image={film.backdrop_path} name={film.title} reting={film.vote_average} />
                ))
            }
        </Box>
    )
}

export default Films;
