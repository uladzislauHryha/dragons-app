import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
	favorites: String[],
};

const initialState: FavoritesState = {
	favorites: [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite(state, action: PayloadAction<string>) {
			const index = action.payload;
			state.favorites.push(index);
		},
		removeFavorite(state, action: PayloadAction<string>) {
			const itemIndex = state.favorites.indexOf(action.payload);
			state.favorites.splice(itemIndex, 1);
		},
	},

});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;