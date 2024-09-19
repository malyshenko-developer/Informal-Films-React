import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors/selectFilters";
import { selectAuth } from "../../store/selectors/selectAuth";
import { useActions } from "../../hooks/useActions";
import { selectFilms } from "../../store/selectors/selectFilms";
import { selectFavoriteFilms } from "../../store/selectors/selectFavoriteFilms";
import { selectFilmsLoading } from "../../store/selectors/selectFilmsLoading";
import { selectFavoriteFilmsLoading } from "../../store/selectors/selectFavoriteFilmsLoading";

const useFilms = () => {
    const filters = useSelector(selectFilters);
    const { currentPage, search, sort } = filters;

    const films = useSelector(selectFilms);
    const favoriteFilms = useSelector(selectFavoriteFilms);
    const filmsLoading = useSelector(selectFilmsLoading);
    const favoriteFilmsLoading = useSelector(selectFavoriteFilmsLoading);

    const { accountId } = useSelector(selectAuth);

    const { getFilmsResponse, getFavoriteFilmsResponse } = useActions();

    useEffect(() => {
        getFilmsResponse(filters);
        getFavoriteFilmsResponse(accountId!);
    }, [currentPage, search, sort]);

    return {films, favoriteFilms, filmsLoading, favoriteFilmsLoading};
}

export default useFilms;