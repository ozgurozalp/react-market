import styled from 'styled-components';

export const RadioButtonContainer = styled.div``;
export const RadioButtonLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	height: 30px;
	& > * {
		flex-shrink: 0;
		flex-grow: 0;
	}
`;
export const CustomRadio = styled.span`
	background: var(--text-color-light);
	border: 2px solid #dfdee2;
	height: 22px;
	width: 22px;
	border-radius: 50%;
`;
export const RadioButtonInput = styled.input`
	display: none;
	&:checked + ${CustomRadio} {
		color: var(--primary-color);
		border-color: var(--primary-color);
		background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6L1 3.72727' stroke='%231976d2' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
		background-repeat: no-repeat;
		background-position: center;
	}
`;
export const RadioButtonSpan = styled.span`
	font-style: normal;
	font-weight: 400;
	cursor: pointer;
	font-size: 14px;
	color: var(--text-color-gray);
`;
