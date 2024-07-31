import axios from 'axios';
import { IFilmCredits, IFilmDetails, IFilters, IResponseFilms, IResponseGenres } from '../interfaces';

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_KEY}`
    },
    params: {
        language: 'ru'
    }
})

const getGenresFilms = async () => {
    const url = '/genre/movie/list';

    try {
        const response = await instance.get<IResponseGenres>(url);
        const genres = response.data.genres;
        
        return genres;
    } catch(error: any) {
        console.log(error.message);
    }
}

const getFilms = async (filters: IFilters) => {
    const { sort, page } = filters;

    const url = `/movie/${sort}`;

    try {
        const response = await instance.get<IResponseFilms>(url, { params: {
            page
        }});
        const filmsDate = response.data;

        return filmsDate;
    } catch(error: any) {
        console.log(error.message);
    }
}

const getFilmDetails = async(filmId: string) => {
    const url = `/movie/${filmId}`;

    try {
        const response = await instance.get<IFilmDetails>(url);
        const detailsData = response.data;

        return detailsData;
    } catch(error: any) {
        console.log(error.message);
    }
}

const getFilmCredits = async (filmId: string) => {
    const url = `/movie/${filmId}/credits`;
    
    try {
        const response = await instance.get<IFilmCredits>(url);
        const creditsData = response.data;

        return creditsData;
    } catch(error: any) {
        console.log(error.message);
    }
}

export { getGenresFilms, getFilms, getFilmDetails, getFilmCredits };