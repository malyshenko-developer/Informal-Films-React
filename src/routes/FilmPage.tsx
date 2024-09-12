import { Box, Card } from "@mui/material";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { getFilmDetails, getFilmCredits, instance, setInstanceApi } from "../api-films/api";
import FilmPoster from "../components/FilmInfo/FilmPoster";
import FilmInfo from "../components/FilmInfo/FilmInfo";
import { IFilmLoaderData } from "../interfaces/responses";
import Cookies from "js-cookie";
import { COOKIES_NAMES } from "../constants";

export async function movieInfoLoader({ params }: LoaderFunctionArgs) {
    if (!instance) {
        setInstanceApi(Cookies.get(COOKIES_NAMES.TOKEN)!);
    }

    const { filmId } = params;

    if (!filmId) {
        return redirect('/error-page');
    }

    const [ detailsData, creditsData ] = await Promise.all([
        getFilmDetails(filmId),
        getFilmCredits(filmId)
    ]);
    
    if (!detailsData || !creditsData) {
        throw Error('Error response film data');
    }
    
    return { detailsData, creditsData, filmId };
}

function FilmPage() {
    const { detailsData, creditsData, filmId } = useLoaderData() as IFilmLoaderData;

    return (
        <Box component='main' p='20px'>
            <Card sx={{bgcolor: '#57cc99', display: 'flex', width: '100%', p: '20px', alignItems: 'flex-start'}} elevation={15}>
                <FilmPoster posterPath={detailsData.poster_path} />
                <FilmInfo detailsData={detailsData} creditsData={creditsData} id={filmId} />
            </Card>
        </Box>
    )
}

export default FilmPage;