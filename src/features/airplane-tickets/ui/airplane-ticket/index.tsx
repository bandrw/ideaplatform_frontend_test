import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import trim from '@shared/lib/utils/trim';
import React from 'react';

import {AirplaneTicket} from '../../model/types';
import AirplaneTicketTime from '../airplane-ticket-time';
import AirplaneTicketTransfers from '../airplane-ticket-transfers';

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
						<Button
							fullWidth
							variant="contained"
							sx={{
								backgroundColor: 'var(--color-action)',
								'&:hover': {
									backgroundColor: 'var(--color-action-dark)',
								},
							}}
						>
							Buy
							<br />
							for {Math.floor(ticket.price.amount)} {ticket.price.currency}
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={cnAirplaneTicket('Info')}>
				<Grid
					container
					gap={1}
					flexWrap="nowrap"
					alignItems="center"
					height="100%"
				>
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
