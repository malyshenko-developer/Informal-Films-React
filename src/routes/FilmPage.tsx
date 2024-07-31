import { Box, Card } from "@mui/material";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { getFilmDetails, getFilmCredits } from "../api-films/api";
import { IFilmLoaderData } from "../interfaces";
import FilmPoster from "../components/FilmInfo/FilmPoster";
import FilmInfo from "../components/FilmInfo/FilmInfo";

export async function loader({ params }: LoaderFunctionArgs) {
    const { filmId } = params;

    if (!filmId) {
        return redirect('/error-page');
    }

    const detailsData = await getFilmDetails(filmId);
    const creditsData = await getFilmCredits(filmId);
    
    if (!detailsData || !creditsData) {
        throw Error('Error response film data');
    }
    
    return { detailsData, creditsData };
}

function FilmPage() {
    const { detailsData, creditsData } = useLoaderData() as IFilmLoaderData;    

    return (
        <Box component='main' p='20px'>
            <Card sx={{bgcolor: '#57cc99', display: 'flex', width: '100%', p: '20px', alignItems: 'flex-start'}} elevation={15}>
                <FilmPoster posterPath={detailsData.poster_path} />
                <FilmInfo detailsData={detailsData} creditsData={creditsData} />
            </Card>
        </Box>
    )
}

export default FilmPage;