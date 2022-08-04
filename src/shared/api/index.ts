import {
	AirplaneTicket,
	TransferPoint,
} from '@features/airplane-tickets/model/types';
import {
	DefaultTransferOption,
	TransferOptionKey,
} from '@features/airplane-tickets/ui/airplane-tickets-filters';

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
	const transfersCount =
		random < 0.2
			? 0
			: random < 0.4
			? 1
			: random < 0.6
			? 2
			: random < 0.8
			? 3
			: 4;
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
	const arrivalDate = new Date(
		departureDate.getTime() + Math.random() * 1000 * 3600 * 24
	);

	tickets.push({
		id: i,
		departure: {
			airportName: getRandom(AIRPORTS),
			date: departureDate.toISOString(),
		},
		arrival: {
			airportName: getRandom(AIRPORTS),
			date: arrivalDate.toISOString(),
		},
		transfers: getRandomTransfers()
			.filter(
				(transfer) =>
					new Date(transfer.date).getTime() < arrivalDate.getTime() &&
					new Date(transfer.date).getTime() > departureDate.getTime()
			)
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
		price: 2000 + Math.floor(Math.random() * 10000),
		imageUrl: getRandom(AIRLINE_LOGOS),
	});
}

interface GetAirplaneTicketsOptions {
	transferFilters?: TransferOptionKey[];
}

const getAirplaneTicketsHandler: {
	[K in TransferOptionKey]: (ticket: AirplaneTicket) => boolean;
} = {
	'all-transfers': () => true,
	'0-transfers': (ticket) => ticket.transfers.length === 0,
	'1-transfer': (ticket) => ticket.transfers.length === 1,
	'2-transfers': (ticket) => ticket.transfers.length === 2,
	'3-transfers': (ticket) => ticket.transfers.length === 3,
};

class Api {
	// eslint-disable-next-line class-methods-use-this,@typescript-eslint/require-await
	async getAirplaneTickets(
		options?: GetAirplaneTicketsOptions
	): Promise<AirplaneTicket[]> {
		let ticketsRes = tickets;

		if (options?.transferFilters !== undefined) {
			if (
				options.transferFilters.length === 1 &&
				options.transferFilters[0] === DefaultTransferOption
			) {
				ticketsRes = ticketsRes.filter((ticket) =>
					getAirplaneTicketsHandler[DefaultTransferOption](ticket)
				);
			} else {
				ticketsRes = ticketsRes.filter((ticket) =>
					options.transferFilters.some((key) =>
						getAirplaneTicketsHandler[key](ticket)
					)
				);
			}
		}

		return ticketsRes.sort((a, b) => a.price - b.price);
	}
}

export const api = new Api();
