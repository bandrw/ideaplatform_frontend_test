import {useEffect, useState} from 'react';

export const useQuery = <T>(callback: () => Promise<T>) => {
	const [state, setState] = useState({
		data: null as null | T,
		isLoading: true,
		isError: false,
	});

	useEffect(() => {
		let isMounted = true;

		callback()
			.then((data) => {
				if (!isMounted) return;
				setState({data, isLoading: false, isError: false});
			})
			.catch(() => {
				if (!isMounted) return;
				setState({data: null, isLoading: false, isError: true});
			});

		return () => {
			isMounted = false;
		};
	}, [callback]);

	return state;
};
