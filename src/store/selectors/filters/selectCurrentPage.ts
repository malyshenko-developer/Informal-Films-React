import { RootState } from "../../store";

export const selectCurrentPage = (state: RootState) => state.filters.currentPage;