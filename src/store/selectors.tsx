import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";
import { SPELLS_PER_PAGE } from "../assets/constatns";

export const selectSpellsList = (state: RootState) => state.spells.list;
export const selectFavorives = (state: RootState) => state.favorites.favorites;
export const selectCurrentPage = (state: RootState) => state.spells.currentPage;

export const selectResultsByPage = createSelector(
	[selectSpellsList, selectCurrentPage],
	(allSpells, currentPage) => {
		const start = (currentPage - 1) * SPELLS_PER_PAGE;
		return allSpells.slice(start, start + SPELLS_PER_PAGE);
	}
)