import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Spin from '@components/Spin';
import {useAirplaneTickets} from '@features/airplane-tickets/lib/useAirplaneTickets';
import AirplaneTicket from '@features/airplane-tickets/ui/airplane-ticket';
import AirplaneTicketsFilters from '@features/airplane-tickets/ui/airplane-tickets-filters';
import ErrorIcon from '@mui/icons-material/Error';
import React from 'react';

const cnAirplaneTickets = cn('AirplaneTickets');

const AirplaneTickets: React.FC = () => {
	const {
		isError,
		isLoading,
		airplaneTickets,
		selectedTransferFilters,
		onTransferFiltersChange,
		selectedCurrency,
		onCurrencyChange,
	} = useAirplaneTickets();

	return (
		<Grid
			container
			className={cnAirplaneTickets()}
			maxWidth={1400}
			justifyContent="center"
			gap={4}
			flexWrap="nowrap"
			margin="0 25px"
		>
			<Grid item>
				<AirplaneTicketsFilters
					selectedCurrency={selectedCurrency}
					onCurrencyChange={onCurrencyChange}
					selectedTransferFilters={selectedTransferFilters}
					onTransferFiltersChange={onTransferFiltersChange}
				/>
			</Grid>
			<Grid item>
				<Grid
					container
					direction="column"
					gap={4}
					minWidth={800}
					justifyContent="center"
					alignItems="center"
					height="100%"
				>
					{isError || isLoading || airplaneTickets?.length === 0 ? (
						<Grid item>
							<Grid
								container
								justifyContent="center"
								alignItems="center"
								gap={1}
							>
								{isLoading ? (
									<Spin />
								) : isError ? (
									<>
										<ErrorIcon />
										Error
									</>
								) : (
									'No tickets'
								)}
							</Grid>
						</Grid>
					) : (
						airplaneTickets?.map((ticket) => (
							<Grid item key={ticket.id}>
								<AirplaneTicket ticket={ticket} />
							</Grid>
						))
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AirplaneTickets;
