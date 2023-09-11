import 'reflect-metadata';
import logger from './utils/logger/winston';
import { createExpressServer } from 'routing-controllers';
import prisma from './utils/prisma';
import { config } from './config';


prisma.$connect()
    .then(() => logger.info('mongodb succeffully connected'))
    .catch((err: Error) => logger.error(`error occured during connection to mongo: ${err}`));

const app = createExpressServer({
    cors: true,
    defaultErrorHandler: false,
    controllers: config.controllers,
    middlewares: config.middlewares,
}).listen(config.PORT, () =>
    logger.info(`🌏 Express server started at http://localhost:${config.PORT}`)
);

export default app;
