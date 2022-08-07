import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import SelectableButton from '@components/SelectableButton';
import ToggleButton from '@components/ToggleButton';
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
		>
			<FilterSection title="Currency">
				<Grid container flexWrap="nowrap">
					{currencies.map((currency, i) => (
						<ToggleButton
							key={currency}
							width="fit-content"
							minWidth="auto"
							toggled={currency === selectedCurrency}
							onClick={() => onCurrencyChange(currency)}
							pin={
								i === 0
									? 'left'
									: i === currencies.length - 1
									? 'right'
									: 'center'
							}
						>
							{currency}
						</ToggleButton>
					))}
				</Grid>
			</FilterSection>
			<FilterSection title="Transfers">
				<Grid container flexDirection="column">
					{transferOptions.map((option) => (
						<Grid key={option.key} item>
							<SelectableButton
								view="pseudo"
								textAlign="left"
								selected={selectedTransferFilters.some(
									(opt) => opt === option.key
								)}
								width="100%"
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
