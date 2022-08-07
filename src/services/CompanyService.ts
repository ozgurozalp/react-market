import { store } from '../store';
import { setCompaniesLoading } from '../reducers/companiesSlice';

export interface Company {
	slug: string;
	name: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	account: number;
	contact: string;
	count: number;
}
export default class CompanyService {
	static async all(): Promise<Company[]> {
		store.dispatch(setCompaniesLoading(true));
		const companies = await fetch(process.env.REACT_APP_SERVICE_ENDPOINT + '/companies');
		store.dispatch(setCompaniesLoading(false));
		return companies.json();
	}
}
