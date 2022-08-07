import styled from 'styled-components';

export const ProductListTitle = styled.h1`
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	color: #6f6f6f;
`;
export const ProductListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const ProductListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const ProductItemContainer = styled.div`
	display: grid;
	gap: 10px;
`;
export const ProductItemImage = styled.div`
	background: #fefefe;
	border: 1.17666px solid #f3f0fe;
	border-radius: 12px;
	aspect-ratio: 1;
	padding: 16px;
	display: grid;
	place-items: center;

	& img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		aspect-ratio: 1;
	}
`;
export const ProductDescription = styled.div`
	display: grid;
	gap: 10px;
`;
export const ProductTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	color: var(--text-color-dark);
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
export const ProductPrice = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	color: var(--primary-color);
`;
export const ProductAddToCart = styled.button`
	background: var(--primary-color);
	border-radius: 2px;
	height: 25px;
	display: grid;
	place-items: center;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	color: var(--text-color-light);
	transition: all 0.3s ease-in-out;

	&:hover {
		background: var(--secondary-color);
	}
`;
