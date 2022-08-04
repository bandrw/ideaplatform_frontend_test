// const API_URL =
// 	process.env.NODE_ENV === 'production'
// 		? 'https://bandrw.github.io/ideaplatform_frontend_test'
// 		: '';

import {
	AirplaneTicket,
	TransferPoint,
} from '@features/airplane-tickets/model/types';

const getRandom = <T>(array: T[]) => {
	return array[Math.floor(Math.random() * (array.length - 1))];
};

const getRandomDate = (): Date => {
	return new Date(
		Date.now() + 1000 * 3600 * 24 + Math.random() * 1000 * 3600 * 24
	);
};

const COUNT = 30;
const AIRPORTS = [
	'VKO, Vnukovo',
	'ZIA, Zhukovsky',
	'KLF, Kaluga',
	'VLI, Semyazino',
	'VOZ, Voronezh',
	'KZN, Kazan',
	'PEZ, Penza',
	'SKX, Saransk',
	'UFA, Ufa',
	'AAQ, Vityazevo',
	'AER, Sochi',
	'EZV, Beryozovo',
	'KRO, Kurgan',
	'OVS, Sovetsky',
	'URJ, Uray',
];
const AIRLINE_LOGOS = [
	'aeroflot-logo.png',
	's7-airlines-logo.png',
	'spirit-airlines-logo.png',
	'qatar-airways-logo.png',
	'emirates-logo.png',
	'turkish-airlines-logo.png',
].map((logo) => `/static/images/${logo}`);

const getRandomTransfers = () => {
	const random = Math.random();
	const transfersCount = random < 0.4 ? 0 : random < 0.6 ? 1 : 2;
	const transfers: TransferPoint[] = [];

	for (let j = 0; j < transfersCount; j++) {
		transfers.push({
			id: j,
			airportName: getRandom(AIRPORTS),
			date: getRandomDate().toISOString(),
		});
	}
	return transfers;
};

const tickets: AirplaneTicket[] = [];

for (let i = 0; i < COUNT; i++) {
	const departureDate = getRandomDate();

	tickets.push({
		id: i,
		departure: {
			airportName: getRandom(AIRPORTS),
			date: departureDate.toISOString(),
		},
		arrival: {
			airportName: getRandom(AIRPORTS),
			date: new Date(
				departureDate.getTime() + Math.random() * 1000 * 3600 * 24
			).toISOString(),
		},
		transfers: getRandomTransfers(),
		price: 2000 + Math.floor(Math.random() * 10000),
		imageUrl: getRandom(AIRLINE_LOGOS),
	});
}

class Api {
	// eslint-disable-next-line class-methods-use-this,@typescript-eslint/require-await
	async getAirplaneTickets(): Promise<AirplaneTicket[]> {
		return tickets.sort((a, b) => a.price - b.price);
	}
}

export const api = new Api();
