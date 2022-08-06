import {Link, LinkProps} from '@mui/material';
import React from 'react';

interface AppLinkProps extends LinkProps {
	external?: boolean;
}

const AppLink: React.FC<AppLinkProps> = ({external = false, sx, ...props}) => {
	const target = external ? '_blank' : undefined;
	const rel = external ? 'noopener' : undefined;

	return (
		<Link
			sx={{color: 'var(--color-link)', ...sx}}
			target={target}
			rel={rel}
			underline="hover"
			{...props}
		/>
	);
};

export default AppLink;
