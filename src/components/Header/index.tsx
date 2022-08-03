import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
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
			spacing={1}
		>
			<Grid item>
				<AirplaneTicketIcon
					style={{
						fontSize: '2rem',
						marginTop: 6,
					}}
				/>
			</Grid>
			<Grid item>
				<h1>Tickets</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
