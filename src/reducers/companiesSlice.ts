import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Company } from '../services/CompanyService';

export interface CartState {
	companies: Company[];
	loading: boolean;
}

const initialState: CartState = {
	companies: [],
	loading: false,
};

export const productSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		setCompanies: (state, action: PayloadAction<Company[]>) => {
			state.companies = action.payload;
		},
		setCompaniesLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const { setCompanies, setCompaniesLoading } = productSlice.actions;

export const selectCompanies = (state: RootState) => state.companiesReducer.companies;
export const selectCompaniesLoading = (state: RootState) => state.companiesReducer.loading;

export default productSlice.reducer;
