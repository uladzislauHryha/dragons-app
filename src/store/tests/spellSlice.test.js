import spellReducer, { setCurrentPage } from "../spellSlice";

const initialState = {
	list: [],
	status: null,
	error: null,
	currentPage: 1,
}

describe('spellReducer', () => {
	it('should return default state when passed mepty action', () => {
		const result = spellReducer(undefined, {});

		expect(result).toEqual(initialState);
	});

	it('should change current page with <setCurrentPage> action', () => {
		const action = { type: setCurrentPage.type, payload: 2 };

		const result = spellReducer(initialState, action);

		expect(result.currentPage).toBe(action.payload);
		expect(result.list).toBe(initialState.list);
	})
})