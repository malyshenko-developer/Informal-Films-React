import { RootState } from "../../store";

export const selectYears = (state: RootState) => state.filters.years;