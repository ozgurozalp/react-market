import { MinusIcon, PlusIcon } from '../../icons';
import {
	CartContainer,
	CartBody,
	CartItems,
	CartSummary,
	CartSummaryButton,
	ProductCounterButton,
	ProductCounterNumber,
	ProductPrice,
	ProductName,
	ProductDesc,
	ProductCounter,
	EmptyCart,
	CartItemContainer,
} from './styled-elements';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrementQuantity, incrementQuantity, selectCartItems, selectCartTotal } from '../../reducers/cartSlice';
import { moneyFormat } from '../../helpers';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Cart() {
	const items = useAppSelector(selectCartItems);
	const total = useAppSelector(selectCartTotal);

	return (
		<CartContainer>
			<CartBody>
				<CartItems>
					{items.length === 0 ? (
						<EmptyCart>
							<Player autoplay loop src="/empty-cart.json" style={{ width: 'min(100%, 200px)' }} />
							Your cart is empty
						</EmptyCart>
					) : (
						items.map(item => (
							<CartItem
								key={item.id}
								productCode={item.id}
								productName={item.name}
								productPrice={item.price}
								productAmount={item.quantity}
							/>
						))
					)}
				</CartItems>
				{items.length > 0 && (
					<CartSummary>
						<CartSummaryButton>{moneyFormat(total)}</CartSummaryButton>
					</CartSummary>
				)}
			</CartBody>
		</CartContainer>
	);
}

type ProductItemProps = {
	productCode: string;
	productName: string;
	productPrice: number;
	productAmount: number;
};

const CartItem = ({ productName, productPrice, productAmount, productCode }: ProductItemProps) => {
	const dispatch = useAppDispatch();
	const increaseAmount = () => {
		dispatch(incrementQuantity(productCode));
	};
	const decreaseAmount = () => {
		dispatch(decrementQuantity(productCode));
	};

	return (
		<CartItemContainer>
			<ProductDesc>
				<ProductName>{productName}</ProductName>
				<ProductPrice>{moneyFormat(productPrice)}</ProductPrice>
			</ProductDesc>
			<ProductCounter>
				<ProductCounterButton onClick={decreaseAmount}>
					<MinusIcon />
				</ProductCounterButton>
				<ProductCounterNumber>{productAmount}</ProductCounterNumber>
				<ProductCounterButton onClick={increaseAmount}>
					<PlusIcon />
				</ProductCounterButton>
			</ProductCounter>
		</CartItemContainer>
	);
};
