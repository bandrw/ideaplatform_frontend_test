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
	price: number;
	imageUrl: string;
}
