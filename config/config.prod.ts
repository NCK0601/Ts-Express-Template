import { ExpressConfig } from '@nichengkai/express/resources';

export default () => {
	const config = {} as ExpressConfig;

	config.server = {
		port: 4000,
		cross: [],
	};

	return config;
}