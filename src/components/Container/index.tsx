import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { StyledContainer } from './styled-elements';

export interface ContainerProps extends ComponentPropsWithoutRef<'button'> {
	children?: ReactNode;
	px?: string;
	py?: string;
}

export default function Container({ children, ...props }: ContainerProps) {
	return <StyledContainer {...props}>{children}</StyledContainer>;
}
