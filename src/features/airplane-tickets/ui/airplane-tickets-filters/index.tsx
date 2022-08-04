import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import SelectableButton from '@components/SelectableButton';
import {ButtonGroup} from '@mui/material';
import React from 'react';

import {currencies, transferOptions} from '../../lib/useAirplaneTickets';
import {Currency, TransferOptionKey} from '../../model/types';
import FilterSection from './filters-section';

const cnAirplaneTicketsFilters = cn('AirplaneTicketsFilters');

interface AirplaneTicketsFiltersProps {
	selectedCurrency: Currency;
	onCurrencyChange: (currency: Currency) => void;
	selectedTransferFilters: TransferOptionKey[];
	onTransferFiltersChange: (key: TransferOptionKey) => void;
}

const AirplaneTicketsFilters: React.FC<AirplaneTicketsFiltersProps> = ({
	selectedCurrency,
	onCurrencyChange,
	selectedTransferFilters,
	onTransferFiltersChange,
}) => {
	return (
		<Grid
			container
			className={cnAirplaneTicketsFilters()}
			flexDirection="column"
			gap={3}
			width={250}
		>
			<FilterSection title="Currency">
				<ButtonGroup fullWidth>
					{currencies.map((currency) => (
						<Button
							key={currency}
							variant={selectedCurrency === currency ? 'contained' : undefined}
							onClick={() => onCurrencyChange(currency)}
						>
							{currency}
						</Button>
					))}
				</ButtonGroup>
			</FilterSection>
			<FilterSection title="Transfers">
				<Grid container direction="column">
					{transferOptions.map((option) => (
						<Grid key={option.key} item>
							<SelectableButton
								selected={selectedTransferFilters.some(
									(opt) => opt === option.key
								)}
								fullWidth
								sx={{textTransform: 'none', color: '#000', fontWeight: 400}}
								onClick={() => onTransferFiltersChange(option.key)}
							>
								{option.name}
							</SelectableButton>
						</Grid>
					))}
				</Grid>
			</FilterSection>
		</Grid>
	);
};

export default AirplaneTicketsFilters;
