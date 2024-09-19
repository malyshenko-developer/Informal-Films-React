import { RootState } from "..";

export const selectFilmsLoading = (state: RootState) => state.films.isLoading;