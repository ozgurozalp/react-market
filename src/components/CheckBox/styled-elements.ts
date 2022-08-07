import styled from 'styled-components';

export const CheckBoxContainer = styled.div``;
export const CheckBoxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	min-height: 30px;
	cursor: pointer;

	& > * {
		flex-grow: 0;
		flex-shrink: 0;
	}
`;
export const CustomCheckBox = styled.span`
	background-color: var(--text-color-light);
	box-shadow: 0 1px 7px rgba(93, 56, 192, 0.4);
	border-radius: 2px;
	height: 22px;
	width: 22px;
`;
export const CheckBoxInput = styled.input`
	display: none;
	&:checked + ${CustomCheckBox} {
		border-color: var(--primary-color);
		background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' viewBox='0 0 13 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6667 1L4.33333 8.33333L1 5' stroke='white' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
		background-repeat: no-repeat;
		background-color: var(--primary-color);
		background-position: center;
	}
`;
export const RadioButtonSpan = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	color: var(--text-color-gray);
	max-width: 80%;
`;
