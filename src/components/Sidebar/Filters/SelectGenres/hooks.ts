import { SyntheticEvent, useEffect, useState } from "react";
import { getGenresFilms, setInstanceApi } from "../../../../api-films/api";
import { IGenre } from "../../../../interfaces/interfaces";
import { useSelector } from "react-redux";
import { selectGenresIds } from "../../../../store/selectors/filters/selectGenresIds";
import { selectAuth } from "../../../../store/selectors/auth/selectAuth";
import { filtersSlice } from "../../../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../../../hooks/redux";

const useGenres = () => {
    const [ genresState, setGenresState ] = useState<IGenre[]>([]);
    const selectedGenresIds = useSelector(selectGenresIds);

    const { token } = useSelector(selectAuth);
    
    const dispatch = useAppDispatch();
    const { setGenres } = filtersSlice.actions;

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            let genresData;

            if (token) {
                setInstanceApi(token);
                genresData = await getGenresFilms();
            }

            if (!ignore) {
                setGenresState(genresData!);
            }
        }

        fetchAPI();

        return () => { ignore = true }
    }, []);
    
    const genresIds = genresState.map(genre => genre.id);

    const handleChangeGenres = (e: SyntheticEvent, newValueGenres:number[]) => {
        e.stopPropagation();
        
        dispatch(setGenres(newValueGenres));
    }

    const getOptionLabel = (option: number) => {
        const genreName = genresState.find(genre => genre.id === option);
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