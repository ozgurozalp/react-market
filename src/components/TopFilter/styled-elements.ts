import styled from 'styled-components';

export const TopFilterContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	& > * {
		flex-shrink: 0;
		flex-grow: 0;
	}
`;
export const TopFilterItem = styled.button`
	background: #f2f0fd;
	border-radius: 2px;
	display: grid;
	place-items: center;
	padding: 6px 16px;

	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	color: #1976d2;
	transition: all 0.3s ease-in-out;

	&.active,
	&:hover {
		background: var(--primary-color);
		color: var(--text-color-light);
	}
`;
