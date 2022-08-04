import MUIButton, {ButtonProps} from '@mui/material/Button';
import React from 'react';

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => (
	<MUIButton ref={ref} {...props} />
));

export default Button;
