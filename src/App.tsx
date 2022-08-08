import { useEffect } from 'react';
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom';
import ProductService from './services/ProductService';
import CompanyService from './services/CompanyService';
import TagService from './services/TagService';
import { useAppDispatch } from './store/hooks';
import { setProducts } from './reducers/productSlice';
import { setCompanies } from './reducers/companiesSlice';
import { setTags } from './reducers/tagsSlice';
import { Container, Footer, Navbar } from './components';
import { useQuery } from './hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { syncQuery, query } = useQuery();

	useEffect(() => {
		serviceCalls();
	}, []);

	useEffect(() => {
		syncQuery();
		productServiceCall();
	}, [navigate, searchParams]);

	function productServiceCall() {
		ProductService.all({
			page: +(searchParams.get('page') ?? 1),
			companies: (query.brands as string[]) ?? [],
			sortField: query?.field as string,
			sortOrder: query?.order as string,
			tags: (query?.tags as string[]) ?? [],
			itemType: query?.itemType as string,
		}).then(items => {
			dispatch(setProducts(items));
		});
	}
	function companyServiceCall() {
		CompanyService.all().then(companies => {
			dispatch(setCompanies(companies));
		});
	}
	function tagsServiceCall() {
		TagService.all().then(tags => {
			dispatch(setTags(tags));
		});
	}

	function serviceCalls() {
		productServiceCall();
		companyServiceCall();
		tagsServiceCall();
	}

	return (
		<>
			<Navbar />
			<Container py="0 2rem">
				<Outlet />
			</Container>
			<ToastContainer />
			<Footer />
		</>
	);
}

export default App;
