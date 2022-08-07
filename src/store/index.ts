import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartSlice';
import productSlice from '../reducers/productSlice';
import companiesSlice from '../reducers/companiesSlice';
import tagsSlice from '../reducers/tagsSlice';
import filterSlice from '../reducers/filterSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		productsReducer: productSlice,
		companiesReducer: companiesSlice,
		tagsReducer: tagsSlice,
		filtersReducer: filterSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
