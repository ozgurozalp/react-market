import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../services/ProductService';
import { ParsePaginateLink } from '../helpers/parsePaginateLink';

export interface CartState {
	products: Product[];
	loading: boolean;
	paginationLink: ParsePaginateLink;
}

const initialState: CartState = {
	products: [],
	loading: false,
	paginationLink: {
		first: 1,
	},
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
		setProductsLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setPaginationLink: (state, action: PayloadAction<ParsePaginateLink>) => {
			state.paginationLink = action.payload;
		},
	},
});

export const { setProducts, setProductsLoading, setPaginationLink } = productSlice.actions;

export const selectProducts = (state: RootState) => state.productsReducer.products;
export const selectProductsLoading = (state: RootState) => state.productsReducer.loading;
export const selectPaginationLink = (state: RootState) => state.productsReducer.paginationLink;

export default productSlice.reducer;
