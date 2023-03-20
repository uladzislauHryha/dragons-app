import { selectSpellsList, selectFavorives, selectCurrentPage, selectResultsByPage } from '../selectors';

describe('redux selectors', () => {
	it('should select spells from state', () => {
		const spells = {
			list: [{ index: "acid-arrow", name: "Acid Arrow", url: "/api/spells/acid-arrow" }]
		};

		const result = selectSpellsList({ spells });

		expect(result).toEqual(spells.list);
	});

	it('should select favorites from state', () => {
		const favorites = {
			favorites: ["acid-arrow"]
		};

		const result = selectFavorives({ favorites });

		expect(result).toEqual(favorites.favorites);
	});

	it('should select current page from spells state', () => {
		const spells = {
			currentPage: 2,
		};

		const result = selectCurrentPage({ spells });

		expect(result).toEqual(spells.currentPage);
	});

	// it('should select spells by page number from spells state', () => {
	// 	const spells = {
	// 		currentPage: 2,
	// 	};

	// 	const result = selectCurrentPage({ spells });

	// 	expect(result).toEqual(spells.currentPage);
	// })
})