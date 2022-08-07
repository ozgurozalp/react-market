import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'qs';

function useQuery() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const query = qs.parse(searchParams.toString(), {
		ignoreQueryPrefix: true,
	});

	function setQuery(newStringObject: object) {
		navigate(
			{
				search: qs.stringify(
					{
						...query,
						...newStringObject,
					},
					{ arrayFormat: 'brackets', encode: false }
				),
			},
			{ replace: true }
		);
	}
	function syncQuery() {
		navigate(
			{
				search: qs.stringify(query, { arrayFormat: 'brackets', encode: false }),
			},
			{ replace: true }
		);
	}

	return { query, setQuery, syncQuery };
}

export default useQuery;
