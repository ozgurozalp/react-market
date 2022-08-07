import qs from 'qs';
import { store } from '../store';
import { setPaginationLink, setProductsLoading } from '../reducers/productSlice';
import { parsePaginateLink } from '../helpers';

export interface Product {
	tags: string[];
	price: number;
	name: string;
	description: string;
	slug: string;
	added: number;
	manufacturer: string;
	itemType: string;
}

export interface ProductServiceParams {
	sortField?: string;
	sortOrder?: string;
	page?: number;
	limit?: number;
	companies?: string[];
	tags: string[];
	itemType: string;
}
export default class ProductService {
	static async all({
		sortField = 'added',
		sortOrder = 'desc',
		page = 1,
		limit = 16,
		companies = [],
		tags = [],
		itemType = '',
	}: ProductServiceParams): Promise<Product[]> {
		const url = ProductService.prepareURL({ sortField, sortOrder, page, limit, companies, tags, itemType });
		store.dispatch(setProductsLoading(true));
		const items = await fetch(url);

		const paginationLink = items.headers?.get('link');
		if (paginationLink) {
			store.dispatch(setPaginationLink(parsePaginateLink(paginationLink)));
		}

		store.dispatch(setProductsLoading(false));
		return items.json();
	}

	static prepareURL({ sortField, sortOrder, page, limit, companies, tags, itemType }: ProductServiceParams): string {
		let url = process.env.REACT_APP_SERVICE_ENDPOINT + '/items';

		const params = qs.stringify(
			{
				_sort: sortField,
				_order: sortOrder,
				_page: page,
				_limit: limit,
				...(itemType?.length > 0 ? { itemType } : {}),
				...(tags?.length > 0 ? { tags_like: `(?:^|\\W)(${tags?.join('|')})(?:$|\\W)` } : {}),
			},
			{ encode: false }
		);

		const companiesCondition = companies
			?.reduce((acc, curr) => {
				return acc + `manufacturer=${curr}&`;
			}, '')
			.slice(0, -1);

		if (params) {
			url += '?' + params + '&' + companiesCondition;
		} else {
			url += '?' + companiesCondition;
		}

		return url;
	}
}
