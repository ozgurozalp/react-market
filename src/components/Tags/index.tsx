import { Card, CheckBox, Input, Loading } from '../';
import { TagsContainer, TagList, Search } from './styled-elements';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTagLoading, selectTags } from '../../reducers/tagsSlice';
import { setTags } from '../../reducers/filterSlice';
import { useQuery } from '../../hooks';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

export default function Tags() {
	const tags = useAppSelector(selectTags);
	const loading = useAppSelector(selectTagLoading);
	const dispatch = useAppDispatch();
	const { query, setQuery } = useQuery();
	const [search, setSearch] = useState('');
	const [checked, setChecked] = useState(() => {
		const items = query.tags as string[];
		return items ?? [];
	});

	useEffect(() => {
		setQuery({
			tags: checked,
		});
		dispatch(setTags(checked));
	}, [checked]);

	const filteredTags = useMemo(() => {
		const noneSelected = tags.filter(tag => !checked.includes(tag.slug));
		const selected = tags.filter(tag => checked.includes(tag.slug));
		return [...selected, ...noneSelected].filter(tag =>
			tag.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		);
	}, [tags, search, checked]);

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
		<Card padding="24px 0" title="Tags">
			<TagsContainer>
				<Search>
					<Input onChange={onSearch} value={search} type="search" placeholder="Search Tags" />
				</Search>
				{loading ? (
					<Loading w={50} h={50} />
				) : (
					<TagList>
						{filteredTags.map(tag => (
							<CheckBox
								onChange={onCheck}
								name="tags[]"
								checked={checked.includes(tag.slug)}
								key={tag.slug}
								value={tag.slug}
								label={`${tag.name} (${tag.count})`}
							/>
						))}
					</TagList>
				)}
			</TagsContainer>
		</Card>
	);
}
