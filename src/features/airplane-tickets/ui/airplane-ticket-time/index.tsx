import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import React from 'react';
import Moment from 'react-moment';

interface AirplaneTicketTimeProps {
	date: string;
	location: string;
	align?: 'left' | 'right';
}

const cnAirplaneTicketTime = cn('AirplaneTicketTime');

const AirplaneTicketTime: React.FC<AirplaneTicketTimeProps> = ({
	date,
	location,
	align = 'left',
}) => {
	return (
		<Grid
			container
			direction="column"
			className={cnAirplaneTicketTime({align})}
			gap={0.5}
		>
			<Grid item className={cnAirplaneTicketTime('Time')}>
				<Moment date={date} format="HH:MM" />
			</Grid>
			<Grid item className={cnAirplaneTicketTime('Location')}>
				{location}
			</Grid>
			<Grid item className={cnAirplaneTicketTime('Date')}>
				<Moment date={date} format="DD MMMM, dddd" />
			</Grid>
		</Grid>
	);
};

export default AirplaneTicketTime;
