import { RootState } from "../../store";

export const selectFavoriteFilms = (state: RootState) => state.favorteFilms.list;