import Link, {LinkProps} from '@mui/material/Link';
import React from 'react';

interface AppLinkProps extends LinkProps {
	external?: boolean;
}

const AppLink: React.FC<AppLinkProps> = ({external = false, ...props}) => {
	const target = external ? '_blank' : undefined;
	const rel = external ? 'noopener' : undefined;

	return <Link target={target} rel={rel} underline="hover" {...props} />;
};

export default AppLink;
