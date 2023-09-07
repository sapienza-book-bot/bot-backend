import { NextFunction, Response, Request } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import logger from "../utils/logger/winston";


@Middleware({ type: 'before' })
export default class HttpRequestLogger implements ExpressMiddlewareInterface {
    use(req: Request, _res: Response, next: NextFunction): void {
        const reqInfo = `REQUEST: |${this.getTimestamp(new Date())}|METHOD: "${req.method}"|ENDPOINT: "${req.path}"|FROM: ${req.ip}|`;
        logger.info(reqInfo);
        next();
    }

    getTimestamp = (dateObject: Date): String => `TIMESTAMP: "${dateObject.getFullYear()}-${(`0${dateObject.getMonth() + 1}`).slice(-2)}-${(`0${dateObject.getDate()}`).slice(-2)} ${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}"`;
}