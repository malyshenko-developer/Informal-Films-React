import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as AuthActionCreators from '../store/action-creators/auth';
import * as FiltersActionCreactors from '../store/action-creators/filters';
import * as FilmsActionCreators from '../store/action-creators/films';
import * as FavoriteFilmsActionCreators from '../store/action-creators/favoriteFilms';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...AuthActionCreators,
        ...FiltersActionCreactors,
        ...FilmsActionCreators,
        ...FavoriteFilmsActionCreators
    }, dispatch);
}