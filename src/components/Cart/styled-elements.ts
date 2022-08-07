import styled from 'styled-components';

export const CartContainer = styled.section`
	background: var(--primary-color);
	padding: 8px;
	width: 100%;

	@media (min-width: 1300px) {
		width: min(100%, 300px);
		position: sticky;
		top: 16px;
	}
`;
export const CartBody = styled.div`
	background: var(--text-color-light);
	border-radius: 2px;
	width: 100%;
	height: 100%;
	padding: 16px;
	display: grid;
	gap: 16px;

	@media (min-width: 1536px) {
		padding: 24px 16px;
	}
`;
export const CartItems = styled.div`
	display: grid;
	gap: 16px;
`;
export const CartSummary = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const CartSummaryButton = styled.button`
	display: grid;
	place-items: center;
	background: var(--text-color-light);
	border: 2px solid var(--primary-color);
	border-radius: 2px;
	font-weight: 600;
	font-size: 14px;
	color: var(--primary-color);
	padding-inline: 24px;
	height: 50px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: var(--primary-color);
		color: var(--text-color-light);
	}
`;
export const CartItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	border-bottom: 1px solid #f4f4f4;
	padding-inline: 5px;
	padding-bottom: 16px;
`;
export const ProductDesc = styled.div`
	display: grid;
	gap: 4px;
`;
export const ProductName = styled.div`
	font-weight: 400;
	font-size: 12px;
	color: var(--text-color-dark);

	@media (min-width: 1536px) {
		font-size: 14px;
	}
`;
export const ProductPrice = styled.div`
	font-weight: 600;
	font-size: 12px;
	color: var(--primary-color);

	@media (min-width: 1536px) {
		font-size: 14px;
	}
`;
export const ProductCounter = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
export const ProductCounterNumber = styled.div`
	background: var(--primary-color);
	display: grid;
	place-items: center;
	width: 25px;
	aspect-ratio: 1;
	font-weight: 700;
	font-size: 12px;
	text-align: center;
	color: var(--text-color-light);
	font-variant: tabular-nums;

	@media (min-width: 1536px) {
		font-size: 15px;
		width: 32px;
	}
`;
export const ProductCounterButton = styled.button`
	display: grid;
	place-items: center;
	width: 25px;
	aspect-ratio: 1;
	transition: background 300ms ease-in-out;

	&:hover {
		background: #e1e1e1;
	}

	@media (min-width: 1536px) {
		width: 32px;
	}
`;
export const EmptyCart = styled.div`
	font-weight: 600;
	font-size: 20px;
	color: var(--text-color-dark);
	display: grid;
	place-items: center;
	padding: 12px;
	width: 100%;
	text-align: center;
`;
