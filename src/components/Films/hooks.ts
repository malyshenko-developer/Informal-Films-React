import { useEffect, useState } from "react";
import { IFilm } from "../../interfaces/interfaces";
import { getFavoriteFilms, getFilms } from "../../api-films/api";
import { useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors/selectFilters";
import { selectAuth } from "../../store/selectors/selectAuth";
import { useActions } from "../../hooks/useActions";

const useFilms = () => {
    const [ films, setFilms ] = useState<IFilm[]>([]);
    const [ favoriteFilms, setFavoriteFilms ] = useState<IFilm[]>([]);
    const filters = useSelector(selectFilters);
    const { currentPage, search, sort } = filters;
    const { accountId } = useSelector(selectAuth);

    const { setCountPages } = useActions();

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const filmsData = await getFilms(filters);
            
            const favoriteFilmsData = await getFavoriteFilms(accountId!);

            if (!ignore) {
                console.log(filters);
                
                setFilms(filmsData?.results!);
                setFavoriteFilms(favoriteFilmsData);

                setCountPages(filmsData?.total_pages!);
            }
        }

        fetchAPI();
        
        return () => { ignore = true }
    }, [currentPage, search, sort]);

    return [ films, favoriteFilms ]
}

export default useFilms;