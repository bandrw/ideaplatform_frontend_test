import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import ClickAwayListener from '@components/ClickAwayListener';
import Grid from '@components/Grid';
import Image from '@components/Image';
import Tooltip from '@components/Tooltip';
import {TransferPoint} from '@features/airplane-tickets/model/types';
import React, {useCallback, useState} from 'react';
import Moment from 'react-moment';

const cnAirplaneTicketTransfers = cn('AirplaneTicketTransfers');

interface TransfersInfoProps {
	transfers: TransferPoint[];
}

const TransfersInfo: React.FC<TransfersInfoProps> = ({transfers}) => {
	const [isTooltipOpened, setIsTooltipOpened] = useState(false);

	const closeTooltip = useCallback(() => setIsTooltipOpened(false), []);

	return (
		<div className={cnAirplaneTicketTransfers('LabelContainer')}>
			{transfers.length !== 0 && (
				<ClickAwayListener onClickAway={closeTooltip}>
					<div>
						<Tooltip
							popup={
								<Grid container gap={1} padding={2} flexDirection="column">
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
							isOpened={isTooltipOpened}
						>
							<Button
								onClick={() => setIsTooltipOpened(true)}
								className={cnAirplaneTicketTransfers('Label')}
								view="pseudo"
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
				<Image
					className={cnAirplaneTicketTransfers('Logo-Plane')}
					src="/static/icons/flight.svg"
					width={22}
					height={22}
				/>
			</div>
		</div>
	);
};

export default AirplaneTicketTransfers;
