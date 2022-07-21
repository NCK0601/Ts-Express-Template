import { ExpressConfig } from '@nichengkai/express/resources';

export default () => {
	const config = {} as ExpressConfig;

	config.server = {
		port: 3000,
		cross: [],
	};

	config.jwt = {
		secretKey: '',
		exclude: [],
	};

	config.mysql = {
		host: '127.0.0.1',
		// port: 3306,
		user: 'root',
		password: '',
		database: '',
	};

	config.build = {
		packageManager: 'yarn',
		// *.md *.lock and tsconfig.json exclude by default
		exclude: [ '.gitignore', '.prettierrc' ],
	};

	return config;
}