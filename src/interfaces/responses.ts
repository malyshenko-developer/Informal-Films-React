import { IFilm, IFilmCredits, IFilmDetails, IGenre } from "./interfaces";

interface IResponseGenres {
    genres: IGenre[];
}

interface IResponseFilms {
    page: number;
    results: IFilm[];
    total_pages: number,
    total_results: number
}

interface IFilmLoaderData {
    creditsData: IFilmCredits;
    detailsData: IFilmDetails;
    filmId: number;
}

export type { IResponseGenres, IResponseFilms, IFilmLoaderData }