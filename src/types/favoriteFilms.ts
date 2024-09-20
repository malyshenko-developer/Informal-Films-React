import { Film } from "./films";

export interface FavoriteFilmsState {
    list: Film[];
    isLoading: boolean;
    error: string | null;
}