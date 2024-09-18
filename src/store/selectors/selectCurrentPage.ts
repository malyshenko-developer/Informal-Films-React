import { RootState } from "..";

export const selectCurrentPage = (state: RootState) => state.filters.currentPage;