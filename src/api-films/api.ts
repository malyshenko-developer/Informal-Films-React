const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_KEY}`
    }
};

const getGenresFilms = async () => {
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        const genres = json.genres;

        return genres;
    } catch(error: any) {
        console.log(error.message);
    }
}

export default getGenresFilms;