import { RootState } from "..";

export const selectFilms = (state: RootState) => state.films.list;