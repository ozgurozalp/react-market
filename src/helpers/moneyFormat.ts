export default function moneyFormat(value: number) {
	return new Intl.NumberFormat('tr-TR', {
		style: 'currency',
		currency: 'TRY',
	}).format(value);
}
