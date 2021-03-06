/**
 * Module dependencies.
 */
import app from '../src';
import http from 'http';
import process from 'process';
import getDefaultConfig from '../config/config.default';
import getProdConfig from '../config/config.prod';
import { doTasks } from '@nichengkai/express/typescript';

const defaultConfig = getDefaultConfig();
const prodConfig = getProdConfig();
const serverConfig = defaultConfig.server;

if (process.env.NODE_ENV === 'pro' && prodConfig.server.port)
  serverConfig.port = prodConfig.server.port;

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(serverConfig.port || 3000);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  doTasks();
  if (process.env.NODE_ENV !== 'pro') {
    console.log(`Express Server is running at http://127.0.0.1:${port}`);
  }
}
