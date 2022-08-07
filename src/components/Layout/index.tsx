import styled from 'styled-components';

const Layout = styled.div`
	display: grid;
	gap: 16px;
	margin-top: 40px;
	grid-template-columns: 1fr;

	@media (min-width: 1024px) {
		grid-template-columns: minmax(200px, 240px) 1fr minmax(200px, 250px);
	}

	& > * {
		align-self: flex-start;
	}
	& > :last-child {
		justify-self: center;
	}
`;

export default Layout;
