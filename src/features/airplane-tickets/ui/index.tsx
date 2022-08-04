import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import {useAirplaneTickets} from '@features/airplane-tickets/lib/useAirplaneTickets';
import AirplaneTicket from '@features/airplane-tickets/ui/airplane-ticket';
import React from 'react';

const cnAirplaneTickets = cn('AirplaneTickets');

const AirplaneTickets: React.FC = () => {
	const {airplaneTickets} = useAirplaneTickets();

	return (
		<Grid
			container
			className={cnAirplaneTickets()}
			maxWidth={1400}
			justifyContent="center"
			gap={4}
			flexWrap="nowrap"
		>
			<Grid item>Filters</Grid>
			<Grid item>
				<Grid container direction="column" gap={4}>
					{airplaneTickets?.map((ticket) => (
						<Grid item key={ticket.id}>
							<AirplaneTicket ticket={ticket} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AirplaneTickets;
