import Button, {ButtonProps} from '@components/Button';
import Image from '@components/Image';
import React from 'react';

interface SelectableButtonProps extends ButtonProps {
	selected?: boolean;
}

const SelectableButton: React.FC<SelectableButtonProps> = ({
	children,
	selected,
	...props
}) => {
	return (
		<Button
			leftIcon={
				selected ? (
					<Image width={15} height={15} src="/static/icons/check.svg" />
				) : null
			}
			{...props}
		>
			{children}
		</Button>
	);
};

export default SelectableButton;
