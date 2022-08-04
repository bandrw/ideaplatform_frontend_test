import {api} from '@shared/api';
import {useQuery} from '@tanstack/react-query';
import {useCallback, useState} from 'react';

import {
	DefaultTransferOption,
	TransferOptionKey,
} from '../ui/airplane-tickets-filters';

export const useAirplaneTickets = () => {
	const [selectedTransferFilters, setSelectedTransferFilters] = useState<
		TransferOptionKey[]
	>([DefaultTransferOption]);

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

	const {data, isLoading, isError} = useQuery(
		['airplaneTickets', selectedTransferFilters],
		() => api.getAirplaneTickets({transferFilters: selectedTransferFilters})
	);

	return {
		selectedTransferFilters,
		onTransferFiltersChange,
		isLoading,
		isError,
		airplaneTickets: data,
	};
};
