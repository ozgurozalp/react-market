import { Card, RadioButton } from '../';
import { SorterContainer } from './styled-elements';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setSort } from '../../reducers/filterSlice';
import { useQuery } from '../../hooks';

export type SortOption = {
	id: number;
	label: string;
	field: string;
	order: 'asc' | 'desc';
};
const sortOptions: SortOption[] = [
	{
		id: 1,
		label: 'Price low to high',
		field: 'price',
		order: 'asc',
	},
	{
		id: 2,
		label: 'Price high to low',
		order: 'desc',
		field: 'price',
	},
	{
		id: 3,
		label: 'New to old',
		field: 'date',
		order: 'desc',
	},
	{
		id: 4,
		label: 'Old to new',
		field: 'date',
		order: 'asc',
	},
];

export default function Sorter() {
	const dispatch = useAppDispatch();
	const { query, setQuery } = useQuery();
	const [selected, setSelected] = useState<SortOption | undefined>(() => {
		return sortOptions.find(option => option.field === query.field && option.order === query.order);
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelected(sortOptions.find(option => option.id === Number(e.target.value)));
	};

	useEffect(() => {
		if (selected) {
			setQuery({
				order: selected?.order,
				field: selected?.field,
			});
		}
		dispatch(setSort(selected));
	}, [selected]);

	return (
		<Card title="Sorting">
			<SorterContainer>
				{sortOptions.map(option => (
					<RadioButton
						onChange={onChange}
						value={option.id.toString()}
						name="product-sort"
						key={option.id}
						checked={selected?.id === option.id}
						label={option.label}
					/>
				))}
			</SorterContainer>
		</Card>
	);
}
