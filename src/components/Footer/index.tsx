import './styles.scss';

import {cn} from '@bem-react/classname';
import AppLink from '@components/AppLink';
import Grid from '@components/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
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
		>
			<Grid item marginRight={1}>
				<Grid container alignItems="center">
					<GitHubIcon />
				</Grid>
			</Grid>
			<Grid item>
				<AppLink
					external
					href="https://github.com/bandrw/ideaplatform_frontend_test"
				>
					github.com/bandrw/ideaplatform_frontend_test
				</AppLink>
			</Grid>
		</Grid>
	);
};

export default Footer;
