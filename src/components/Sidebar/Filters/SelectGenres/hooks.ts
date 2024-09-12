import { SyntheticEvent, useEffect, useState } from "react";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";
import { getGenresFilms } from "../../../../api-films/api";
import { IGenre } from "../../../../interfaces/interfaces";

const useGenres = () => {
    const [ genres, setGenres ] = useState<IGenre[]>([]);
    const selectedGenresIds = useFilters().genresIds;
    const dispatch = useFiltersDispatch();

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const genresData = await getGenresFilms();

            if (!ignore) {
                setGenres(genresData!);
            }
        }

        fetchAPI();
        return () => { ignore = true }
    }, []);
    
    const genresIds = genres.map(genre => genre.id);

    const handleChangeGenres = (e: SyntheticEvent, newValueGenres:number[]) => {
        e.stopPropagation();

        dispatch(
        {
            type: 'selectedGenre',
            genresIds: newValueGenres
        }
        )
    }

    const getOptionLabel = (option: number) => {
        const genreName = genres.find(genre => genre.id === option);
        return genreName ? genreName.name : '';
    }

    return {
        handleChangeGenres,
        selectedGenresIds,
        genresIds,
        getOptionLabel
    }
}

export { useGenres }