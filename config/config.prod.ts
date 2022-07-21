import { ExpressConfig, TOKEN } from '@nichengkai/express/typescript';

export default () => {
  const config = <ExpressConfig>{};

  config.server = {
    port: 3300,
    cross: [],
  };

  config.jwt = {
    secretKey: TOKEN,
    exclude: [/^\/api\//],
  };

  return config;
};
