import { Card, Loading, Pagination, TopFilter } from '../';
import { moneyFormat } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectProducts, selectProductsLoading } from '../../reducers/productSlice';
import { Product } from '../../services/ProductService';
import {
	ProductListWrapper,
	ProductListTitle,
	ProductListContainer,
	ProductItemContainer,
	ProductItemImage,
	ProductAddToCart,
	ProductTitle,
	ProductDescription,
	ProductPrice,
	ProductListEmpty,
} from './styled-elements';
import { addToCart } from '../../reducers/cartSlice';
import { Player } from '@lottiefiles/react-lottie-player';

export default function ProductList() {
	const products = useAppSelector(selectProducts);
	const loading = useAppSelector(selectProductsLoading);

	return (
		<ProductListWrapper>
			<ProductListTitle>Products</ProductListTitle>
			<TopFilter />
			<Card>
				{loading ? (
					<Loading w={100} h={100} />
				) : products.length ? (
					<ProductListContainer>
						{products.map(product => (
							<ProductItem product={product} key={product.slug} />
						))}
					</ProductListContainer>
				) : (
					<ProductListEmpty>
						<Player autoplay loop src="/no-items.json" style={{ width: 'min(100%, 200px)' }} />
					</ProductListEmpty>
				)}
			</Card>
			<Pagination />
		</ProductListWrapper>
	);
}

type ProductItemProps = {
	product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
	const dispatch = useAppDispatch();
	const onClickHandler = () => {
		dispatch(
			addToCart({
				id: product.slug,
				name: product.name,
				price: product.price,
				quantity: 1,
				unitPrice: product.price,
			})
		);
	};
	return (
		<ProductItemContainer>
			<ProductItemImage>
				<img src={`https://source.unsplash.com/random?v=${product.slug}`} alt="" />
			</ProductItemImage>
			<ProductDescription>
				<ProductPrice>{moneyFormat(product.price)}</ProductPrice>
				<ProductTitle>{product.name}</ProductTitle>
				<ProductAddToCart onClick={onClickHandler}>Add</ProductAddToCart>
			</ProductDescription>
		</ProductItemContainer>
	);
};
