import styled from 'styled-components';

const Input = styled.input`
	border: 2px solid #e0e0e0;
	border-radius: 2px;
	padding: 12px 16px;
	width: 100%;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	color: #a8a8a8;

	&:focus {
		border: 2px solid var(--primary-color);
	}
`;

export default Input;
