import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartItem {
	id: string;
	name: string;
	price: number;
	unitPrice: number;
	quantity: number;
}

export interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: getCart(),
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>) {
			const exist = state.items.find(item => item.id === action.payload.id);
			if (exist) {
				exist.quantity += 1;
				exist.price = exist.unitPrice * exist.quantity;
			} else {
				action.payload.price = action.payload.unitPrice * action.payload.quantity;
				state.items.push(action.payload);
			}
			setCart(state.items);
		},
		incrementQuantity(state, action: PayloadAction<string>) {
			const exist = state.items.find(item => item.id === action.payload);
			if (exist) {
				exist.quantity += 1;
				exist.price = exist.unitPrice * exist.quantity;
			}
			setCart(state.items);
		},
		decrementQuantity(state, action: PayloadAction<string>) {
			const exist = state.items.find(item => item.id === action.payload);
			if (exist) {
				if (exist.quantity > 1) {
					exist.quantity -= 1;
					exist.price = exist.unitPrice * exist.quantity;
				} else {
					cartSlice.caseReducers.removeFromCart(state, action);
				}
			}
			setCart(state.items);
		},
		removeFromCart(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.id !== action.payload);
			setCart(state.items);
		},
	},
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((acc, item) => acc + item.price, 0);

export default cartSlice.reducer;

function getCart(): CartItem[] {
	return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart: CartItem[]) {
	localStorage.setItem('cart', JSON.stringify(cart));
}
