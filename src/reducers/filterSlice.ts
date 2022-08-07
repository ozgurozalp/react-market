import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SortOption } from '../components/Sorter';

export interface FilterState {
	tags: string[];
	companies: string[];
	sort?: SortOption;
	itemType?: string;
}

const initialState: FilterState = {
	tags: [],
	companies: [],
	sort: undefined,
	itemType: undefined,
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setTags: (state, action: PayloadAction<string[]>) => {
			state.tags = action.payload;
		},
		setCompanies: (state, action: PayloadAction<string[]>) => {
			state.companies = action.payload;
		},
		setSort: (state, action: PayloadAction<SortOption | undefined>) => {
			state.sort = action.payload;
		},
		setItemType: (state, action: PayloadAction<string | undefined>) => {
			state.itemType = action.payload;
		},
	},
});

export const { setTags, setCompanies, setSort, setItemType } = filterSlice.actions;

export const selectFilteredTags = (state: RootState) => state.filtersReducer.tags;
export const selectFilteredCompanies = (state: RootState) => state.filtersReducer.companies;
export const selectSort = (state: RootState) => state.filtersReducer.sort;
export const selectItemType = (state: RootState) => state.filtersReducer.itemType;

export default filterSlice.reducer;
