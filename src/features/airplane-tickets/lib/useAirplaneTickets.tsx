import {api} from '@shared/api';
import {useQuery} from '@tanstack/react-query';

export const useAirplaneTickets = () => {
	const {data, isLoading, isError} = useQuery(['airplaneTickets'], () =>
		api.getAirplaneTickets()
	);

	return {
		isLoading,
		isError,
		airplaneTickets: data,
	};
};
