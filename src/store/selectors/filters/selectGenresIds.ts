import { RootState } from "../../store";

export const selectGenresIds = (state: RootState) => state.filters.genresIds;