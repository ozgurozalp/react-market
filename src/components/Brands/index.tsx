import { Card, CheckBox, Input, Loading } from '../';
import { BrandsContainer, BrandList, Search } from './styled-elements';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCompanies, selectCompaniesLoading } from '../../reducers/companiesSlice';
import React, { useMemo, useState, ChangeEvent, useEffect } from 'react';
import { useQuery } from '../../hooks';
import { setCompanies } from '../../reducers/filterSlice';

export default function Brands() {
	const companies = useAppSelector(selectCompanies);
	const loading = useAppSelector(selectCompaniesLoading);
	const dispatch = useAppDispatch();
	const { query, setQuery } = useQuery();
	const [search, setSearch] = useState('');
	const [checked, setChecked] = useState(() => {
		const items = query.brands as string[];
		return items ?? [];
	});

	useEffect(() => {
		setQuery({
			brands: checked,
		});
		dispatch(setCompanies(checked));
	}, [checked]);

	const filteredCompanies = useMemo(() => {
		const noneSelected = companies.filter(company => !checked.includes(company.slug));
		const selected = companies.filter(company => checked.includes(company.slug));
		return [...selected, ...noneSelected].filter(company =>
			company.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		);
	}, [companies, search, checked]);

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
		// @ts-ignore
		setChecked(prev => {
			if (e.target.checked) {
				return [...prev, e.target.value];
			} else {
				return prev.filter(item => item !== e.target.value);
			}
		});
	};

	return (
		<Card padding="24px 0" title="Brands">
			<BrandsContainer>
				<Search>
					<Input onChange={onSearch} value={search} type="search" placeholder="Search Brand" />
				</Search>
				{loading ? (
					<Loading w={50} h={50} />
				) : (
					<BrandList>
						{filteredCompanies.map(company => (
							<CheckBox
								onChange={onCheck}
								name="brands[]"
								value={company.slug}
								key={company.slug}
								checked={checked.includes(company.slug)}
								label={`${company.name} (${company.count})`}
							/>
						))}
					</BrandList>
				)}
			</BrandsContainer>
		</Card>
	);
}
