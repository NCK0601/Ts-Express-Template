import { ExpressConfig } from '@nichengkai/express/config';

export default () => {
  const config = <ExpressConfig>{};

  config.server = {
    port: 3300,
    cors: ['localhost:8080'],
  };

  return config;
};
