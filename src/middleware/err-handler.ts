import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../utils/errors';
import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import logger from '../utils/logger/winston';

@Middleware({ type: 'after' })
export class HttpErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err !== null && err !== undefined && !res.headersSent) {
      logger.error(`ERROR:|${err.name}|${err.message}|${err?.stack}|`);
      if (err instanceof (BaseError)) {
        res.status(res.statusCode).json({
          name: err.name,
          code: err.code,
          message: err.message,
          stack: err.stack,
        });
      }
      res.statusCode = 500;
      res.status(res.statusCode).json({
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
    }
    next(req);
  }
}