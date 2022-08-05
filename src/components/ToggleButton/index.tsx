import MUIToggleButton, {ToggleButtonProps} from '@mui/material/ToggleButton';
import React from 'react';

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
	return <MUIToggleButton {...props} />;
};

export default ToggleButton;
