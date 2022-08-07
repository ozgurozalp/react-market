import styled from 'styled-components';

const FooterWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	height: 70px;
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	color: var(--primary-color);
`;

export default function Footer() {
	return (
		<FooterWrapper>
			<a href="https://altogic.com/">&copy; {new Date().getFullYear()} Altogic</a>
			<span>•</span>
			<a href="https://github.com/ozgurozalp">Özgür ÖZALP</a>
		</FooterWrapper>
	);
}
