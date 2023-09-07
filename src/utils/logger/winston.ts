
import {
  createLogger,
  format,
  transports,
} from 'winston';
import ConsoleLogTransport from './console-transport';
import path from 'path';


const logTransports = [
  new transports.File({
    level: 'error',
    filename: './logs/error.log',
    format: format.json({
      replacer: (key, value) => {
        if (key === 'error') {
          return {
            message: (value as Error).message,
            stack: (value as Error).stack
          };
        }
        return value;
      }
    })
  }),
  new transports.File({
    level: 'http',
    filename: path.join(__dirname, '/logs/requests.log'),
    format: format.json()
  }),
  new ConsoleLogTransport()
];

const logger = createLogger({
  format: format.combine(
    format.colorize({ all: true }),
    format.printf((info) => `[${info['timestamp']}] ${info.level}: ${info.message}`)
  ),
  transports: logTransports,
  defaultMeta: { service: 'api' },
  level: process.env['NODE_ENV'] === 'development' ? 'silly' : 'info'
});

export default logger;