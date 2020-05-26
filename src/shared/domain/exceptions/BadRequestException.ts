import httpStatus from "http-status";
import GenericException from "./GenericException";

class BadRequestException extends GenericException{
  constructor(message: string, errorCode: string, errors: object = {}) {
    super(message, httpStatus.BAD_REQUEST, errorCode, errors);
  }
}

export default BadRequestException;
