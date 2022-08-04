import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import SelectableButton from '@components/SelectableButton';
import {ButtonGroup} from '@mui/material';
import React from 'react';

import FilterSection from './filters-section';

const cnAirplaneTicketsFilters = cn('AirplaneTicketsFilters');

export type TransferOptionKey =
	| 'all-transfers'
	| '0-transfers'
	| '1-transfer'
	| '2-transfers'
	| '3-transfers';

export const DefaultTransferOption: TransferOptionKey = 'all-transfers';

const transferOptions: {name: string; key: TransferOptionKey}[] = [
	{
		name: 'All',
		key: 'all-transfers',
	},
	{
		name: 'No transfers',
		key: '0-transfers',
	},
	{
		name: '1 transfer',
		key: '1-transfer',
	},
	{
		name: '2 transfers',
		key: '2-transfers',
	},
	{
		name: '3 transfers',
		key: '3-transfers',
	},
];

interface AirplaneTicketsFiltersProps {
	selectedTransferFilters: TransferOptionKey[];
	onTransferFiltersChange: (key: TransferOptionKey) => void;
}

const AirplaneTicketsFilters: React.FC<AirplaneTicketsFiltersProps> = ({
	selectedTransferFilters,
	onTransferFiltersChange,
}) => {
	const currencies = ['USD', 'RUB', 'EUR'];

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
						<Button key={currency}>{currency}</Button>
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
