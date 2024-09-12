import { CAST_JOBS } from "../../../constants";
import { IFilmDetails, ITeamMember } from "../../../interfaces/interfaces";
import { getTeamMemberFormatter } from "./utils";

const useData = (details: IFilmDetails, crew: ITeamMember[]) => {
    const { production_countries, release_date, genres, budget, runtime } = details;

    const productionCountriesFormatted = production_countries.map(country => country.name).join(', ');

    const yearOfReleas  = new Date(release_date).getFullYear().toString();

    const genresFormatted = genres.map(genre => genre.name.toLowerCase()).join(', ');
    
    const directorsFormatted = getTeamMemberFormatter(crew, CAST_JOBS.DIRECTOR);
    const writersFormatted = getTeamMemberFormatter(crew, CAST_JOBS.WRITER);
    const producersFormatted = getTeamMemberFormatter(crew, CAST_JOBS.PRODUCER);

    const budgetFormatted = '$' + budget;

    const runtimeFormatted = runtime + ' мин.';

    return {
        productionCountriesFormatted,
        yearOfReleas,
        genresFormatted,
        directorsFormatted,
        writersFormatted,
        producersFormatted,
        budgetFormatted,
        runtimeFormatted
    }
}

export { useData }