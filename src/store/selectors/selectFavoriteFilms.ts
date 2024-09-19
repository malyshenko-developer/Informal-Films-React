import { RootState } from "..";

export const selectFavoriteFilms = (state: RootState) => state.favorteFilms.list;