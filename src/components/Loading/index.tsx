import styled from 'styled-components';
import { LoadingIcon } from '../../icons';

const LoadingContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;
export default function Loading({ w = 50, h = 50 }: { w: number; h: number }) {
	return (
		<LoadingContainer>
			<LoadingIcon w={w} h={h} />
		</LoadingContainer>
	);
}
