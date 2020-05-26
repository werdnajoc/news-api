import httpStatus from "http-status";

class GenericException extends Error {
  message: string;
  statusCode: number;
  errorCode: string;
  errors: object;

  constructor(message: string, errorStatus: number, errorCode: string, errors: object) {
    super();
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }

    const statusCode = errorStatus;
    this.message = message;
    this.statusCode = statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    this.errorCode = errorCode;
    this.errors = errors;
  }

  getMessage() {
    return this.message;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getErrorCode() {
    return this.errorCode;
  }

  getError() {
    return this.errors;
  }
}

export default GenericException;
