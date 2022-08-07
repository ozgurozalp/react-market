import styled from 'styled-components';

export const StyledContainer = styled.section<{ px?: string; py?: string }>`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-inline: ${props => props.px ?? '1rem'};
	padding-block: ${props => props.py ?? '1rem'};

	@media (min-width: 640px) {
		max-width: 640px;
	}

	@media (min-width: 768px) {
		max-width: 768px;
	}

	@media (min-width: 1024px) {
		max-width: 1024px;
	}

	@media (min-width: 1280px) {
		max-width: 1200px;
	}

	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;
