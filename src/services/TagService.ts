import { setTagLoading } from '../reducers/tagsSlice';
import { store } from '../store';

export interface Tag {
	slug: string;
	name: string;
	count: number;
}

export default class TagService {
	static async all(): Promise<Tag[]> {
		store.dispatch(setTagLoading(true));
		const tags = await fetch(process.env.REACT_APP_SERVICE_ENDPOINT + '/tags');
		store.dispatch(setTagLoading(false));
		return tags.json();
	}
}
