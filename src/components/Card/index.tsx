import { CardBody, CardContainer, CardTitle, CardWrapper } from './styled-elements';
import { ReactNode } from 'react';

type CardProps = {
	title?: string;
	children?: ReactNode;
	padding?: string;
};

export default function Card({ title, children, padding }: CardProps) {
	return (
		<CardWrapper>
			{title && <CardTitle>{title}</CardTitle>}
			<CardContainer>
				<CardBody padding={padding}>{children}</CardBody>
			</CardContainer>
		</CardWrapper>
	);
}
