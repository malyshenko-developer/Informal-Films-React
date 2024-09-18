import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as AuthActionCreators from '../store/action-creators/auth';
import * as FiltersActionCreactors from '../store/action-creators/filters';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({...AuthActionCreators, ...FiltersActionCreactors}, dispatch);
}