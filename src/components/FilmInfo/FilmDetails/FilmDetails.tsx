import { Box, Typography } from "@mui/material";
import { IFilmDetails, ITeamMember } from "../../../interfaces/interfaces";
import FilmDetailElement from "./FilmDetailElement";
import { TEXTS } from "../../../constants";
import { useData } from "./hooks";

interface FilmDetailsProps {
    details: IFilmDetails;
    crew: ITeamMember[];
}

const FilmDetails = ({ details, crew }: FilmDetailsProps) => {
    const {
        productionCountriesFormatted,
        yearOfReleas,
        genresFormatted,
        directorsFormatted,
        writersFormatted,
        producersFormatted,
        budgetFormatted,
        runtimeFormatted
    } = useData(details, crew);

    return (
        <Box sx={{backgroundColor: '#57cc99', borderRadius: '5px', p: '5px'}}>
            <Typography variant='h4' mb='20px'>
                { TEXTS.ABOUT_FILM }
            </Typography>
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.COUNTRY} value={productionCountriesFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.YEAR_OF_RELEAS} value={yearOfReleas} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.GENRE} value={genresFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.DIRECTOR} value={directorsFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.SCREENPLAY} value={writersFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.PRODUCER} value={producersFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.BUDGET} value={budgetFormatted} />
            <FilmDetailElement title={TEXTS.TITLES_OF_DETAILS.TIME} value={runtimeFormatted} />
        </Box>
    )
}

export default FilmDetails;