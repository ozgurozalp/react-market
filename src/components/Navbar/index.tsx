import { ShoppingBagIcon } from '../../icons';
import { Container } from '../../components';
import { NavbarContainer, CartTotalPrice, Price } from './styled-elements';
import { useAppSelector } from '../../store/hooks';
import { selectCartTotal } from '../../reducers/cartSlice';
import { moneyFormat } from '../../helpers';

export default function Navbar() {
	const total = useAppSelector(selectCartTotal);
	return (
		<NavbarContainer>
			<Container>
				<CartTotalPrice>
					<ShoppingBagIcon />
					<Price>{moneyFormat(total)}</Price>
				</CartTotalPrice>
			</Container>
		</NavbarContainer>
	);
}
