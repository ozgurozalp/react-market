import { ChangeEvent } from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel, CustomCheckBox, RadioButtonSpan } from './styled-elements';

type CheckBoxProps = {
	label: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	name: string;
	value?: string;
};

export default function CheckBox({ label, onChange, checked = false, name, value }: CheckBoxProps) {
	return (
		<CheckBoxContainer>
			<CheckBoxLabel>
				<CheckBoxInput value={value} name={name} defaultChecked={checked} type="checkbox" onChange={onChange} />
				<CustomCheckBox />
				<RadioButtonSpan>{label}</RadioButtonSpan>
			</CheckBoxLabel>
		</CheckBoxContainer>
	);
}
