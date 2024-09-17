import { useEffect, useState } from "react";
import { useHomePageInfoDispatch } from "../../contexts/home-page-info";
import { IFilm } from "../../interfaces/interfaces";
import { useFilters } from "../../contexts/filters";
import { getFavoriteFilms, getFilms } from "../../api-films/api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const useFilms = () => {
    const homePageInfoDispatch = useHomePageInfoDispatch();
    const [ films, setFilms ] = useState<IFilm[]>([]);
    const [ favoriteFilms, setFavoriteFilms ] = useState<IFilm[]>([]);
    const filters = useFilters();
    const { accountId } = useTypedSelector(state => state.auth);

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const filmsData = await getFilms(filters);
            homePageInfoDispatch({
                type: 'settedCountPages',
                countPages: filmsData?.total_pages!
            });

            const favoriteFilmsData = await getFavoriteFilms(accountId!);

            if (!ignore) {
                setFilms(filmsData?.results!);
                setFavoriteFilms(favoriteFilmsData);
            }
        }

        fetchAPI();
        
        return () => { ignore = true }
    }, [filters]);

    return [ films, favoriteFilms ]
}

export default useFilms;