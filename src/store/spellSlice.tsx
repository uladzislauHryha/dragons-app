import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Spell = {
	index: string,
	name: string,
	url: string,
}

type SpellsState = {
	list: Spell[],
	status: string | null,
	error: string | null,
	currentPage: number,
}

export const initialState: SpellsState = {
	list: [],
	status: null,
	error: null,
	currentPage: 1,
}

export const fetchSpells = createAsyncThunk(
	'spells/fetchSpells',
	async function (_, { rejectWithValue }) {
		try {
			const resp = await fetch(process.env.REACT_APP_API_URL + 'spells');

			if (!resp.ok) throw new Error('Server error');

			const data = await resp.json();
			return data.results;
		} catch (e: any) {
			return rejectWithValue(e.message as string);
		}
	}
);

const spellListSlice = createSlice({
	name: 'spells',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSpells.pending, (state, action) => {
			state.status = 'loading';
			state.error = null;
		})
		builder.addCase(fetchSpells.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.list = action.payload;
		})
		builder.addCase(fetchSpells.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload as string;
		})
	},


});

export const { setCurrentPage } = spellListSlice.actions;

export default spellListSlice.reducer;