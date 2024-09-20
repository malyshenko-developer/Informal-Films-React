import axios, { AxiosInstance } from 'axios';
import { IFilmCredits, IFilmDetails } from '../interfaces/interfaces';
import { BASE_API_URL } from '../constants';
import { IResponseFilms, IResponseGenres } from '../interfaces/responses';
import { FiltersState } from '../types/filters';

export let instance: AxiosInstance;

const setInstanceApi = (token: string) => {
    instance = axios.create({
        baseURL: BASE_API_URL,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        params: {
            language: 'ru'
        }
    })
}

const fetchFavoriteFilm = async (account_id: string, filmId: number, isFavorite: boolean) => {
    const url = `/account/${account_id}/favorite`;

    const body = { 'media_type': 'movie', 'media_id': filmId, 'favorite': !isFavorite }

    await instance.post(url, body);
}

const getFavoriteFilms = async (accountId: string) => {
    const url = `/account/${accountId}/favorite/movies`;
    
    try {
        const response = await instance.get(url);

        return response.data.results;
        
    } catch(error: any) {
        console.error(error.message);
    }
}

const getAccountId = async () => {
    const url = '/account/account_id';

    try {
        const response = await instance.get(url);
        
        return response.data.id;
        
    } catch(error: any) {
        console.error(error.message);
    }
}

const getGenresFilms = async () => {
    const url = '/genre/movie/list';

    try {
        const response = await instance.get<IResponseGenres>(url);
        const genres = response.data.genres;  
        
        return genres;
    } catch(error: any) {
        console.error(error.message);
    }
}

const getFilms = async (filters: FiltersState) => {
    const { currentPage, search, sort, genresIds, years } = filters;

    enum getFilmsUrls {
        SEARCH = `/search/movie`,
        ALL = `/discover/movie`
    }

    const url = search ? getFilmsUrls.SEARCH : getFilmsUrls.ALL;

    const genresFormatString = genresIds.join(',');

    const startYear = Array.isArray(years) && years[0];
    const endYear = Array.isArray(years) && years[1];

    const params = {
        page: currentPage,
        query: search,
        sort_by: `${sort}.desc`,
        with_genres: genresFormatString,
        'primary_release_date.gte': `${startYear}-01-01`,
        'primary_release_date.lte': `${endYear}-12-31`
    }

    try {
        const response = await instance.get<IResponseFilms>(url, { params });
        const filmsData = response.data;

        return filmsData;
    } catch(error: any) {
        console.error(error.message);
    }
}

const getFilmDetails = async(filmId: string) => {
    const url = `/movie/${filmId}`;

    try {
        const response = await instance.get<IFilmDetails>(url);
        const detailsData = response.data;

        return detailsData;
    } catch(error: any) {
        console.error(error.message);
    }
}

const getFilmCredits = async (filmId: string) => {
    const url = `/movie/${filmId}/credits`;
    
    try {
        const response = await instance.get<IFilmCredits>(url);
        const creditsData = response.data;

        return creditsData;
    } catch(error: any) {
        console.error(error.message);
    }
}

export { getGenresFilms, getFilms, getFilmDetails, getFilmCredits, setInstanceApi, getAccountId, getFavoriteFilms, fetchFavoriteFilm };