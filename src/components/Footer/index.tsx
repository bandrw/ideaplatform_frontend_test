import './styles.scss';

import {cn} from '@bem-react/classname';
import ExternalLink from '@components/ExternalLink';
import Grid from '@components/Grid';
import Image from '@components/Image';
import React from 'react';

const cnFooter = cn('Footer');

const Footer: React.FC = () => {
	return (
		<Grid
			className={cnFooter()}
			container
			width="100%"
			height={40}
			justifyContent="center"
			alignItems="center"
			gap={1}
		>
			<Grid item>
				<Grid container alignItems="center">
					<Image src="/static/icons/github.svg" width={24} height={24} />
				</Grid>
			</Grid>
			<Grid item>
				<ExternalLink href="https://github.com/bandrw/ideaplatform_frontend_test">
					github.com/bandrw/ideaplatform_frontend_test
				</ExternalLink>
			</Grid>
		</Grid>
	);
};

export default Footer;
