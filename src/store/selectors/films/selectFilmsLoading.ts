import { RootState } from "../../store";

export const selectFilmsLoading = (state: RootState) => state.films.isLoading;