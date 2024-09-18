import { SyntheticEvent, useEffect, useState } from "react";
import { getGenresFilms, setInstanceApi } from "../../../../api-films/api";
import { IGenre } from "../../../../interfaces/interfaces";
import { useSelector } from "react-redux";
import { selectGenresIds } from "../../../../store/selectors/selectGenresIds";
import { selectAuth } from "../../../../store/selectors/selectAuth";
import { useActions } from "../../../../hooks/useActions";

const useGenres = () => {
    const [ genres, setGenres ] = useState<IGenre[]>([]);
    const selectedGenresIds = useSelector(selectGenresIds);

    const { changeGenres } = useActions();

    const { token } = useSelector(selectAuth);

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

        changeGenres(newValueGenres);
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