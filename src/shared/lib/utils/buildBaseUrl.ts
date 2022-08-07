import trim from './trim';

export const buildBaseUrl = (url: string) =>
	`${trim(window.location.href, '/')}${url}`;
