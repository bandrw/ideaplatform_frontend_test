import {CircularProgress, CircularProgressProps} from '@mui/material';
import React from 'react';

const Spin: React.FC<CircularProgressProps> = (props) => {
	return <CircularProgress {...props} />;
};

export default Spin;
