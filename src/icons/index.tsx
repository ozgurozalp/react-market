export const ShoppingBagIcon = () => (
	<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.411743 5.46655H13.5884V17.0081H0.411743V5.46655Z" fill="currentColor" />
		<path
			d="M4.67188 0.657471H9.34121L10.2765 1.62625V5.4666L9.26455 5.46388V1.6242H4.75454V5.46388L3.72388 5.4666V1.6242L4.67188 0.657471Z"
			fill="currentColor"
		/>
	</svg>
);

export const MinusIcon = () => (
	<svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect y="0.969116" width="10" height="2.04385" rx="1" style={{ fill: 'var(--primary-color)' }} />
	</svg>
);

export const PlusIcon = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6.44053 10.6505L6.44053 6.44124H10.5595C10.8027 6.44124 11 6.23965 11 5.99106C11 5.74247 10.8027 5.54087 10.5595 5.54087H6.44053V1.33165C6.44053 1.08306 6.24326 0.88147 6 0.88147C5.75674 0.88147 5.55947 1.08306 5.55947 1.33165V5.54087L1.44053 5.54087C1.19727 5.54087 1 5.74247 1 5.99106C1 6.23965 1.19727 6.44124 1.44053 6.44124L5.55947 6.44124L5.55947 10.6505C5.55947 10.8991 5.75674 11.1006 6 11.1006C6.24326 11.1006 6.44053 10.8991 6.44053 10.6505"
			style={{ stroke: 'var(--primary-color)' }}
		/>
	</svg>
);

export const ArrowBackIcon = ({ w = 14, h = 14 }: { w?: number; h?: number }) => (
	<svg width={w} height={h} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.0667786 7.33281C0.110539 7.43791 0.171804 7.53425 0.259324 7.61308L6.38574 13.7438C6.72707 14.0854 7.27844 14.0854 7.61977 13.7438C7.9611 13.4023 7.9611 12.8505 7.61977 12.5089L2.98995 7.87582L13.1248 7.87582C13.6062 7.87582 14 7.4817 14 7C14 6.5183 13.6062 6.12418 13.1248 6.12418L2.9812 6.12418L7.61102 1.49109C7.95235 1.14951 7.95235 0.597748 7.61102 0.256178C7.26969 -0.0853924 6.71832 -0.0853923 6.37699 0.256178L0.250571 6.38693C0.171802 6.46575 0.110537 6.56209 0.0580247 6.66719C-0.020744 6.87739 -0.0207421 7.12262 0.0667786 7.33281Z"
			fill="currentColor"
		/>
	</svg>
);

export const ArrowForwardIcon = ({ w = 14, h = 14 }: { w?: number; h?: number }) => (
	<svg width={w} height={h} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13.9332 6.66719C13.8895 6.56209 13.8282 6.46575 13.7407 6.38692L7.61426 0.256176C7.27293 -0.0853938 6.72156 -0.0853937 6.38023 0.256177C6.0389 0.597747 6.0389 1.14951 6.38023 1.49108L11.01 6.12418L0.875203 6.12418C0.393842 6.12418 1.1397e-06 6.5183 1.22392e-06 7C1.30814e-06 7.4817 0.393842 7.87582 0.875204 7.87582L11.0188 7.87582L6.38898 12.5089C6.04765 12.8505 6.04765 13.4023 6.38898 13.7438C6.73031 14.0854 7.28169 14.0854 7.62301 13.7438L13.7494 7.61307C13.8282 7.53425 13.8895 7.43791 13.942 7.33281C14.0207 7.12261 14.0207 6.87738 13.9332 6.66719Z"
			fill="currentColor"
		/>
	</svg>
);

export const DropDownIcon = ({ w = 48, h = 48 }: { w?: number; h?: number }) => (
	<svg xmlns="http://www.w3.org/2000/svg" height={w} width={h}>
		<path d="m24 30-10-9.95h20Z" fill="currentColor" />
	</svg>
);

export const LoadingIcon = ({ w = 50, h = 50 }: { w: number; h: number }) => (
	<svg width={w} height={h} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
				<stop style={{ stopColor: 'var(--primary-color)' }} stopOpacity="0" offset="0%" />
				<stop style={{ stopColor: 'var(--primary-color)' }} stopOpacity=".631" offset="63.146%" />
				<stop style={{ stopColor: 'var(--primary-color)' }} offset="100%" />
			</linearGradient>
		</defs>
		<g fill="none" fillRule="evenodd">
			<g transform="translate(1 1)">
				<path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="0.9s"
						repeatCount="indefinite"
					/>
				</path>
				<circle fill="#fff" cx="36" cy="18" r="1">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="0.9s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</g>
	</svg>
);
