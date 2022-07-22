import { ExpressConfig } from '@nichengkai/express/config';

export default () => {
  const config = <ExpressConfig>{};

  config.server = {
    port: 3000,
    cors: '*',
  };

  config.jwt = {
    secretKey: '',
    exclude: [/^\/api\//],
  };

  config.mysql = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: '',
  };

  config.build = {
    packageManager: 'yarn',
    // *.md *.lock and tsconfig.json exclude by default
    exclude: ['.gitignore', '.prettierrc'],
  };

  return config;
};
