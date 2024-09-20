import { RootState } from "../../store";

export const selectFavoriteFilmsLoading = (state: RootState) => state.favorteFilms.isLoading;