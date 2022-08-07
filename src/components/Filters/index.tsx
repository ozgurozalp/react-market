import styled from 'styled-components';
import { Brands, Sorter, Tags, Card } from '../index';
import { useMediaQuery } from '../../hooks';
import { useState } from 'react';
import { DropDownIcon } from '../../icons';

const FiltersWrapper = styled.div`
	display: grid;
	gap: 24px;
	padding-block-end: 24px;
`;

const DropdownWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 100%;
	color: var(--text-color);

	svg {
		transition: transform 0.2s ease-in-out;
		color: var(--primary-color);
	}

	&.open {
		svg {
			transform: rotate(180deg);
		}
	}
`;
const DropdownTitle = styled.h5`
	padding: 1rem;
	position: relative;
	font-style: normal;
	font-weight: 400;
	font-size: 20px;

	&::after {
		content: '';
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
		width: 10px;
		height: 10px;
		background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath d='m24 30-10-9.95h20Z'/%3E%3C/svg%3E");
	}
`;

export default function Filters() {
	const matched = useMediaQuery('(min-width: 1024px)');

	const [open, setOpen] = useState(false);
	const onClick = () => {
		setOpen(prev => !prev);
	};

	return (
		<>
			{matched ? (
				<OriginalFilters />
			) : (
				<>
					<Card padding="0">
						<DropdownWrapper className={open ? 'open' : ''} onClick={onClick}>
							<DropdownTitle>Filters & Sort</DropdownTitle>
							<DropDownIcon />
						</DropdownWrapper>
					</Card>
					{open && <OriginalFilters />}
				</>
			)}
		</>
	);
}

const OriginalFilters = () => {
	return (
		<FiltersWrapper>
			<Sorter />
			<Brands />
			<Tags />
		</FiltersWrapper>
	);
};
