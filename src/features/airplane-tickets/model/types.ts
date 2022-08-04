export type Currency = 'USD' | 'RUB' | 'EUR';

export type TransferOptionKey =
	| 'all-transfers'
	| '0-transfers'
	| '1-transfer'
	| '2-transfers'
	| '3-transfers';

export interface TransferPoint {
	id: number | string;
	airportName: string;
	date: string;
}

export interface AirplaneTicket {
	id: number | string;
	departure: Omit<TransferPoint, 'id'>;
	arrival: Omit<TransferPoint, 'id'>;
	transfers: TransferPoint[];
	price: {
		amount: number;
		currency: Currency;
	};
	imageUrl: string;
}
