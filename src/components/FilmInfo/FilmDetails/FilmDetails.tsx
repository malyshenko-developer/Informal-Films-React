import { Box, Typography } from "@mui/material";
import { IFilmDetails, ITeamMember } from "../../../interfaces";
import FilmDetailElement from "./FilmDetailElement";

interface FilmDetailsProps {
    details: IFilmDetails;
    crew: ITeamMember[];
}

const getTeamMemberFormatter = (crew: ITeamMember[], job: string) => {
    const members = crew.filter(member => member.job === job)
    const membersFormatted = members.map(member => member.name).join(', ');

    return membersFormatted;
}

function FilmDetails({ details, crew }: FilmDetailsProps) {
    const productionCountriesFormatted = details.production_countries.map(country => country.name).join(', ');

    const yearOfReleas  = new Date(details.release_date).getFullYear().toString();

    const genresFormatted = details.genres.map(genre => genre.name.toLowerCase()).join(', ');
    
    const directorsFormatted = getTeamMemberFormatter(crew, 'Director');
    const writersFormatted = getTeamMemberFormatter(crew, 'Writer');
    const producersFormatted = getTeamMemberFormatter(crew, 'Producer');

    const budgetFormatted = '$' + details.budget;

    const runtimeFormatted = details.runtime + ' мин.'

    return (
        <Box>
            <Typography variant='h4' mb='20px'>
                О фильме:
            </Typography>
            <FilmDetailElement title='Страна' value={productionCountriesFormatted} />
            <FilmDetailElement title='Год релиза' value={yearOfReleas} />
            <FilmDetailElement title='Жанр' value={genresFormatted} />
            <FilmDetailElement title='Режиссер' value={directorsFormatted} />
            <FilmDetailElement title='Сценарий' value={writersFormatted} />
            <FilmDetailElement title='Продюсер' value={producersFormatted} />
            <FilmDetailElement title='Бюджет' value={budgetFormatted} />
            <FilmDetailElement title='Время' value={runtimeFormatted} />
        </Box>
    )
}

export default FilmDetails;