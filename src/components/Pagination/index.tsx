import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '../../icons';
import { useAppSelector } from '../../store/hooks';
import { selectPaginationLink } from '../../reducers/productSlice';
import { useMediaQuery, useQuery } from '../../hooks';
import { PaginationContainer, PaginationNumbers, PaginationLink, PaginationButton } from './styled-elements';

export default function Pagination() {
	const paginationLinks = useAppSelector(selectPaginationLink);
	const matched = useMediaQuery('(min-width: 768px)');
	const { setQuery } = useQuery();
	const [searchParams] = useSearchParams();
	const currentPage = Number(searchParams.get('page') || 1);
	const changePage = (page: number | undefined) => {
		if (page) {
			setQuery({ page });
		}
	};
	const pages = useMemo(() => {
		const { last } = paginationLinks;
		const count = matched ? 8 : 5;
		const mod = currentPage % count;
		const sub = mod - 1;
		let _pages = Array.from({ length: count }, (_, i) => {
			return i + (mod === 0 ? currentPage - (count - 1) : currentPage - sub);
		});

		if (last) {
			_pages = _pages.filter(page => page <= last);
		}
		return _pages;
	}, [paginationLinks, searchParams, matched]);

	return (
		<PaginationContainer>
			<PaginationButton disabled={currentPage === 1} onClick={() => changePage(paginationLinks?.prev)}>
				<ArrowBackIcon h={matched ? 14 : 10} w={matched ? 14 : 10} />
				Prev
			</PaginationButton>
			<PaginationNumbers>
				{pages.map(page => (
					<PaginationLink
						onClick={() => changePage(page)}
						className={currentPage === page ? 'active' : ''}
						key={page}
					>
						{page}
					</PaginationLink>
				))}
			</PaginationNumbers>
			<PaginationButton
				disabled={!Boolean(paginationLinks?.next)}
				onClick={() => changePage(paginationLinks?.next)}
			>
				Next <ArrowForwardIcon h={matched ? 14 : 10} w={matched ? 14 : 10} />
			</PaginationButton>
		</PaginationContainer>
	);
}
