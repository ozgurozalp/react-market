import { ChangeEvent } from 'react';
import {
	RadioButtonContainer,
	RadioButtonLabel,
	RadioButtonInput,
	CustomRadio,
	RadioButtonSpan,
} from './styled-elements';

type RadioButtonProps = {
	label: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	name: string;
	value?: string;
};

export default function RadioButton({ label, onChange, checked = false, name, value }: RadioButtonProps) {
	return (
		<RadioButtonContainer>
			<RadioButtonLabel>
				<RadioButtonInput
					name={name}
					defaultChecked={checked}
					type="radio"
					onChange={onChange}
					value={value}
				></RadioButtonInput>
				<CustomRadio />
				<RadioButtonSpan>{label}</RadioButtonSpan>
			</RadioButtonLabel>
		</RadioButtonContainer>
	);
}
