import MUITooltip, {TooltipProps} from '@mui/material/Tooltip';
import React from 'react';

const Tooltip: React.FC<TooltipProps> = ({children, ...props}) => {
	return <MUITooltip {...props}>{children}</MUITooltip>;
};

export default Tooltip;
