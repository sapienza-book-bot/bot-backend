export class BaseError extends Error {
  httpStatus: number;
  code: string;

  constructor(httpStatus: number, code: string, message?: string) {
    super(message);
    this.httpStatus = httpStatus;
    this.code = code;
  }
}
