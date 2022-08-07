import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	background: var(--primary-color);
	height: 50px;
	color: var(--text-color-light);

	@media (min-width: 768px) {
		height: 75px;
	}

	& > :first-child {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100%;
	}
`;
export const CartTotalPrice = styled.div`
	display: flex;
	align-items: center;
	gap: 13px;
	height: 100%;
`;
export const Price = styled.span`
	font-weight: 600;
	font-size: 14px;
`;
