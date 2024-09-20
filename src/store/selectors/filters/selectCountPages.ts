import { RootState } from "../../store";

export const selectCountPages = (state: RootState) => state.filters.countPages;