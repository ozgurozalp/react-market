import styled from 'styled-components';
export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
export const PaginationButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	user-select: none;

	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	padding-inline: 1rem;
	height: 40px;
	color: var(--primary-color);
	border-radius: 2px;
	transition: all 0.3s ease-in-out;

	@media (min-width: 768px) {
		font-size: 14px;
	}

	&[disabled],
	&.disabled {
		color: var(--text-color);
		pointer-events: none;
	}

	&:hover {
		background: var(--primary-color);
		color: var(--text-color-light);
	}
`;
export const PaginationNumbers = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;

	& > svg {
		margin-inline: 1rem;
	}
`;
export const PaginationLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	background: transparent;
	border-radius: 2px;
	width: 22px;
	height: 30px;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 32px;
		height: 40px;
	}

	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	color: var(--text-color);
	transition: all 0.3s ease-in-out;

	&.active,
	&:hover {
		background-color: var(--primary-color);
		color: var(--text-color-light);
	}
`;
