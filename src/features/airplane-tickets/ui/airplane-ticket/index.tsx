import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import {AirplaneTicket} from '@features/airplane-tickets/model/types';
import AirplaneTicketTime from '@features/airplane-tickets/ui/airplane-ticket-time';
import AirplaneTicketTransfers from '@features/airplane-tickets/ui/airplane-ticket-transfers';
import trim from '@shared/lib/utils/trim';
import React from 'react';

interface AirplaneTicketProps {
	ticket: AirplaneTicket;
}

const cnAirplaneTicket = cn('AirplaneTicket');

const AirplaneTicket: React.FC<AirplaneTicketProps> = ({ticket}) => {
	return (
		<Grid container className={cnAirplaneTicket()} gap={2} flexWrap="nowrap">
			<Grid item className={cnAirplaneTicket('BuySection')}>
				<Grid container direction="column" gap={2}>
					<Grid item>
						<div
							className={cnAirplaneTicket('BuySection-Image')}
							style={{
								backgroundImage: `url("${trim(window.location.href, '/')}${
									ticket.imageUrl
								}")`,
							}}
						/>
					</Grid>
					<Grid item>
						<Button fullWidth variant="contained">
							Buy
							<br />
							for {ticket.price} RUB
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={cnAirplaneTicket('Info')}>
				<Grid container gap={1} flexWrap="nowrap">
					<Grid item>
						<AirplaneTicketTime
							date={ticket.departure.date}
							location={ticket.departure.airportName}
							align="left"
						/>
					</Grid>
					<Grid item>
						<AirplaneTicketTransfers transfers={ticket.transfers} />
					</Grid>
					<Grid item>
						<AirplaneTicketTime
							date={ticket.arrival.date}
							location={ticket.arrival.airportName}
							align="right"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AirplaneTicket;
