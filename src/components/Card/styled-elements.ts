import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
export const CardContainer = styled.div`
	background: var(--text-color-light);
	box-shadow: 0 6px 24px rgba(93, 62, 188, 0.04);
	border-radius: 2px;
`;
export const CardBody = styled.div<{ padding?: string }>`
	padding: ${props => props.padding || '24px'};
`;
export const CardTitle = styled.h5`
	font-weight: 600;
	font-size: 13px;
	color: var(--text-color);
`;
