import { SyntheticEvent, useEffect, useState } from "react";
import { useFilters, useFiltersDispatch } from "../../../../contexts/filters";
import { getGenresFilms, setInstanceApi } from "../../../../api-films/api";
import { IGenre } from "../../../../interfaces/interfaces";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const useGenres = () => {
    const [ genres, setGenres ] = useState<IGenre[]>([]);
    const selectedGenresIds = useFilters().genresIds;
    const dispatch = useFiltersDispatch();

    const { token } = useTypedSelector(state => state.auth);

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            let genresData;

            if (token) {
                setInstanceApi(token);
                genresData = await getGenresFilms();
            }

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