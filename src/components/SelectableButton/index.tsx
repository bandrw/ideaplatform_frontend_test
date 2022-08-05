import Button from '@components/Button';
import Grid from '@components/Grid';
import CheckIcon from '@mui/icons-material/Check';
import {ButtonProps} from '@mui/material/Button';
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
		<Button {...props}>
			<Grid container wrap="nowrap" alignItems="center">
				<Grid item width={30} marginRight={1.5}>
					{selected ? (
						<CheckIcon
							sx={{
								marginBottom: '-5px',
								fontSize: '1.2rem',
								color: 'var(--color-primary)',
							}}
						/>
					) : null}
				</Grid>
				<Grid item>{children}</Grid>
			</Grid>
		</Button>
	);
};

export default SelectableButton;
