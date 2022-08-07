import { TopFilterContainer, TopFilterItem } from './styled-elements';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setItemType } from '../../reducers/filterSlice';
import { useQuery } from '../../hooks';

export type TopFilterOption = {
	id: number;
	field: 'itemType';
	label: string;
	value: string;
};

const filterOptions: TopFilterOption[] = [
	{
		id: 1,
		field: 'itemType',
		label: 'Mug',
		value: 'mug',
	},
	{
		id: 2,
		field: 'itemType',
		label: 'Shirt',
		value: 'shirt',
	},
];

export default function TopFilter() {
	const { query, setQuery } = useQuery();
	const dispatch = useAppDispatch();
	const [selected, setSelected] = useState<TopFilterOption>(() => {
		return filterOptions.find(option => option.value === query.itemType) as TopFilterOption;
	});

	const clickHandler = (option: TopFilterOption) => {
		setSelected(option);
		setQuery({ itemType: option.value });
		dispatch(setItemType(option.value));
	};

	useEffect(() => {}, [selected]);

	return (
		<TopFilterContainer>
			{filterOptions.map(option => (
				<TopFilterItem
					className={selected?.id === option.id ? 'active' : ''}
					onClick={() => clickHandler(option)}
					key={option.id}
				>
					{option.label}
				</TopFilterItem>
			))}
		</TopFilterContainer>
	);
}
