import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Tag } from '../services/TagService';

export interface CartState {
	tags: Tag[];
	loading: boolean;
}

const initialState: CartState = {
	tags: [],
	loading: false,
};

export const tagSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		setTags: (state, action: PayloadAction<Tag[]>) => {
			state.tags = action.payload;
		},
		setTagLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const { setTags, setTagLoading } = tagSlice.actions;

export const selectTags = (state: RootState) => state.tagsReducer.tags;
export const selectTagLoading = (state: RootState) => state.tagsReducer.loading;

export default tagSlice.reducer;
