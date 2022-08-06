import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import Tooltip from '@components/Tooltip';
import {TransferPoint} from '@features/airplane-tickets/model/types';
import FlightIcon from '@mui/icons-material/Flight';
import {ClickAwayListener} from '@mui/material';
import React, {useState} from 'react';
import Moment from 'react-moment';

const cnAirplaneTicketTransfers = cn('AirplaneTicketTransfers');

interface TransfersInfoProps {
	transfers: TransferPoint[];
}

const TransfersInfo: React.FC<TransfersInfoProps> = ({transfers}) => {
	const [isTooltipOpened, setIsTooltipOpened] = useState(false);

	return (
		<div className={cnAirplaneTicketTransfers('LabelContainer')}>
			{transfers.length !== 0 && (
				<ClickAwayListener onClickAway={() => setIsTooltipOpened(false)}>
					<div>
						<Tooltip
							PopperProps={{
								disablePortal: true,
							}}
							title={
								<Grid container gap={1} padding={1} direction="column">
									{transfers.map((transfer) => (
										<Grid
											item
											key={transfer.id}
											className={cnAirplaneTicketTransfers('TransferInfo')}
										>
											<Moment date={transfer.date} format="MMMM, DD HH:MM" />
											{' — '}
											{transfer.airportName}
										</Grid>
									))}
								</Grid>
							}
							open={isTooltipOpened}
							onClose={() => setIsTooltipOpened(false)}
							disableHoverListener
							disableTouchListener
							disableFocusListener
						>
							<Button
								onClick={() => setIsTooltipOpened(true)}
								className={cnAirplaneTicketTransfers('Label')}
								sx={{
									fontWeight: 400,
									padding: '5px 10px',
									color: 'var(--color-gray)',
									textTransform: 'capitalize',
								}}
							>
								{transfers.length === 1
									? '1 transfer'
									: `${transfers.length} transfers`}
							</Button>
						</Tooltip>
					</div>
				</ClickAwayListener>
			)}
		</div>
	);
};

interface AirplaneTicketTransfersProps {
	transfers: TransferPoint[];
}

const AirplaneTicketTransfers: React.FC<AirplaneTicketTransfersProps> = ({
	transfers,
}) => {
	return (
		<div className={cnAirplaneTicketTransfers()}>
			<TransfersInfo transfers={transfers} />
			<div className={cnAirplaneTicketTransfers('Logo')}>
				<div className={cnAirplaneTicketTransfers('Logo-Line')} />
				<FlightIcon className={cnAirplaneTicketTransfers('Logo-Plane')} />
			</div>
		</div>
	);
};

export default AirplaneTicketTransfers;
