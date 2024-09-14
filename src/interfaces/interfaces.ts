interface IGenre {
    name: string;
    id: number;
}

interface IFilm {
    adult: boolean;
    backdrop_path: string;
    genre_ids: IGenre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IProductionCompany {
    id: number;
    logo_path: null;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string
}

interface ISpokenLanguages {
    english_name: string;
    iso_639_1: string,
    name: string
}

interface IFilmDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: 73;
    spoken_languages: ISpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IArtist {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface ITeamMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string,
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

interface IFilmCredits {
    id: number;
    cast: IArtist[];
    crew: ITeamMember[];
}

interface IFilters {
    search: string;
    sort: string;
    years: number | Array<number>;
    genresIds: Array<number>;
    page: number;
}



export type { IGenre, IFilters, IFilm, IFilmDetails, IFilmCredits, IArtist, ITeamMember }