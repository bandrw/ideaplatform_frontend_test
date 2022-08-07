import {api} from '@shared/api';
import {useQuery} from '@shared/lib/useQuery';
import {useCallback, useState} from 'react';

import {Currency, TransferOptionKey} from '../model/types';

export const DefaultTransferOption: TransferOptionKey = 'all-transfers';

export const transferOptions: {name: string; key: TransferOptionKey}[] = [
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

export const currencies: Currency[] = ['USD', 'RUB', 'EUR'];

export const useAirplaneTickets = () => {
	const [selectedTransferFilters, setSelectedTransferFilters] = useState<
		TransferOptionKey[]
	>([DefaultTransferOption]);
	const [selectedCurrency, setSelectedCurrency] = useState<Currency>('RUB');

	const onTransferFiltersChange = useCallback((key: TransferOptionKey) => {
		setSelectedTransferFilters((prevState) => {
			let newState: TransferOptionKey[];

			if (key === DefaultTransferOption) {
				return [DefaultTransferOption];
			}

			if (prevState.includes(key)) {
				newState = prevState.filter((k) => k !== key);
			} else {
				newState = [...prevState, key];
			}
			newState = newState.filter((opt) => opt !== DefaultTransferOption);
			if (newState.length === 0) return [DefaultTransferOption];

			return newState;
		});
	}, []);

	const fetcher = useCallback(
		() =>
			api.getAirplaneTickets({
				transferFilters: selectedTransferFilters,
				currency: selectedCurrency,
			}),
		[selectedCurrency, selectedTransferFilters]
	);

	const {data, isLoading, isError} = useQuery(fetcher);

	return {
		selectedTransferFilters,
		onTransferFiltersChange,
		selectedCurrency,
		onCurrencyChange: setSelectedCurrency,
		isLoading,
		isError,
		airplaneTickets: data,
	};
};
