import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import Image from '@components/Image';
import React from 'react';

import {AirplaneTicket as AirplaneTicketType} from '../../model/types';
import AirplaneTicketTime from '../airplane-ticket-time';
import AirplaneTicketTransfers from '../airplane-ticket-transfers';

interface AirplaneTicketProps {
	ticket: AirplaneTicketType;
}

const cnAirplaneTicket = cn('AirplaneTicket');

const AirplaneTicket: React.FC<AirplaneTicketProps> = ({ticket}) => {
	return (
		<Grid container className={cnAirplaneTicket()} gap={2} flexWrap="nowrap">
			<Grid item className={cnAirplaneTicket('BuySection')}>
				<Grid container flexDirection="column" gap={2}>
					<Grid item>
						<Image
							src={ticket.imageUrl}
							width={200}
							height={50}
							backgroundSize="70%"
						/>
					</Grid>
					<Grid item>
						<Button width="100%" view="action">
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
