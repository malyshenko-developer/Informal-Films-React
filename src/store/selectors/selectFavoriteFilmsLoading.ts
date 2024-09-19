import { RootState } from "..";

export const selectFavoriteFilmsLoading = (state: RootState) => state.favorteFilms.isLoading;