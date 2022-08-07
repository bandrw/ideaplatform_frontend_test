import {DefaultTransferOption} from '@features/airplane-tickets/lib/useAirplaneTickets';
import {
	AirplaneTicket,
	Currency,
	TransferOptionKey,
} from '@features/airplane-tickets/model/types';

import tickets from './data/tickets.json';

interface GetAirplaneTicketsOptions {
	transferFilters?: TransferOptionKey[];
	currency?: Currency;
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

const currencyConverter: {[K in Currency]: number} = {
	RUB: 1,
	USD: 62,
	EUR: 63,
};

class Api {
	// eslint-disable-next-line class-methods-use-this,@typescript-eslint/require-await
	async getAirplaneTickets(
		options?: GetAirplaneTicketsOptions
	): Promise<AirplaneTicket[]> {
		let ticketsRes = tickets as AirplaneTicket[];

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
					options.transferFilters?.some((key) =>
						getAirplaneTicketsHandler[key](ticket)
					)
				);
			}
		}

		if (options?.currency !== undefined) {
			ticketsRes = ticketsRes.map((ticket) => ({
				...ticket,
				price:
					options.currency !== undefined
						? {
								amount:
									ticket.price.amount / currencyConverter[options.currency],
								currency: options.currency,
						  }
						: ticket.price,
			}));
		}

		return ticketsRes.sort((a, b) => a.price.amount - b.price.amount);
	}
}

export const api = new Api();
