export interface Genre {
    name: string;
    id: number;
}

export interface Film {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Genre[];
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

export interface FilmsState {
    list: Film[],
    isLoading: boolean;
    error: string | null;
}