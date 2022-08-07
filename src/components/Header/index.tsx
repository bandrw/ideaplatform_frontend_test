import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Image from '@components/Image';
import React from 'react';

const cnHeader = cn('Header');

const Header: React.FC = () => {
	return (
		<Grid
			container
			width="100%"
			height={80}
			justifyContent="center"
			alignItems="center"
			className={cnHeader()}
			gap={1.5}
		>
			<Grid item>
				<Image src="/static/icons/flight-ticket.svg" width={40} height={40} />
			</Grid>
			<Grid item>
				<h1>Tickets</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
