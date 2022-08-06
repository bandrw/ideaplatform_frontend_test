import {
	ToggleButton as MUIToggleButton,
	ToggleButtonProps,
} from '@mui/material';
import React from 'react';

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
	return <MUIToggleButton {...props} />;
};

export default ToggleButton;
