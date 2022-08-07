import { Cart, Filters, ProductList } from '../components';
import { Layout } from '../components';

export default function Home() {
	return (
		<Layout>
			<Filters />
			<ProductList />
			<Cart />
		</Layout>
	);
}
