import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
import SignUpDialog from "../components/dialog-windows/SignUpDialog";
import { useEffect, useState } from "react";
import SignInDialog from "../components/dialog-windows/SignInDialog";
import { getAccountId, setInstanceApi } from "../api-films/api";

import { COOKIES_NAMES } from "../constants";
import { selectAuth } from "../store/selectors/auth/selectAuth";
import { useSelector } from "react-redux";
import { authSlice } from "../store/reducers/authSlice";
import { useAppDispatch } from "../hooks/redux";

const Root = () => {
    const { token, accountId } = useSelector(selectAuth);
    const isEmptyToken = !token;
 
    const { setToken, setAccountId } = authSlice.actions;
    const dispatch = useAppDispatch();

    const [ signUpSeen, setSignUpSeen ] = useState(isEmptyToken);
    const [ signInSeen, setSignInSeen ] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchAPI = async () => {
            const accountIdValue = await getAccountId();

            if (!ignore && !accountId) {
                dispatch(setAccountId(accountIdValue));
                
                Cookies.set(COOKIES_NAMES.ACCOUNT_ID, accountIdValue, { expires: 1 / 120 });
            }
        }

        if (token) {
            setInstanceApi(token);
            fetchAPI();
        }

        return () => { ignore = true }
    }, [token]);

    const handleChangeSignUpSeen = () => {
        setSignUpSeen(!signUpSeen);
    }

    const handleChangeSignInSeen = () => {
        setSignInSeen(!signInSeen);
    }

    const handleAuthorized = (token: string) => {        
        dispatch(setToken(token));
        Cookies.set(COOKIES_NAMES.TOKEN, token, { expires: 1 / 120 });
    }

    return (
        <Box width='100%' bgcolor='#c7f9cc' minHeight='100vh'>
            <Header changeSignUpSeen={handleChangeSignUpSeen} token={token} />
            <SignInDialog seen={signInSeen} changeSeen={handleChangeSignInSeen} changeSignUpSeen={handleChangeSignUpSeen} handleAuthorized={handleAuthorized} />
            {   
                token ? <Outlet /> : <SignUpDialog seen={signUpSeen} changeSeen={handleChangeSignUpSeen} changeSignInSeen={handleChangeSignInSeen} />
            }
        </Box>
    )
}

export default Root;