import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors/filters/selectFilters";
import { selectAuth } from "../../store/selectors/auth/selectAuth";
import { selectFavoriteFilms } from "../../store/selectors/favoriteFilms/selectFavoriteFilms";
import { selectFilmsLoading } from "../../store/selectors/films/selectFilmsLoading";
import { selectFavoriteFilmsLoading } from "../../store/selectors/favoriteFilms/selectFavoriteFilmsLoading";
import { useAppDispatch } from "../../hooks/redux";
import { fetchFilms } from "../../store/action-creators/films";
import { fetchFavoriteFilms } from "../../store/action-creators/favoriteFilms";
import { selectFilms } from "../../store/selectors/films/selectFilms";

const useFilms = () => {
    const filters = useSelector(selectFilters);
    const { currentPage, search, sort } = filters;

    const films = useSelector(selectFilms);
    const favoriteFilms = useSelector(selectFavoriteFilms);
    const filmsLoading = useSelector(selectFilmsLoading);
    const favoriteFilmsLoading = useSelector(selectFavoriteFilmsLoading);

    const { accountId } = useSelector(selectAuth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFilms(filters));
        dispatch(fetchFavoriteFilms(accountId!));
    }, [currentPage, search, sort]);

    return {films, favoriteFilms, filmsLoading, favoriteFilmsLoading};
}

export default useFilms;