import 'reflect-metadata';
import logger from './utils/logger/winston';
import { createExpressServer } from 'routing-controllers';
import prisma from './utils/prisma';
import { config } from './config';


const serverStart = (port: number) => {
    prisma.$connect()
        .then(() => logger.info('mongodb succeffully connected'))
        .catch((err) => logger.error(`error occured during connection to mongo: ${err}`));
    createExpressServer({
        cors: true,
        defaultErrorHandler: false,
        controllers: config.controllers,
        middlewares: config.middlewares,
    }).listen(port, () =>
        logger.info(`🌏 Express server started at http://localhost:${port}`)
    );
}

serverStart(config.PORT)
