import {
    Request,
    Response,
    NextFunction
} from "express";
import httpStatus from "http-status";

import GenericException from "@exceptions/GenericException";

class ExceptionsMiddleware {
    setHttpError(error: GenericException, request: Request, response: Response, next: NextFunction) {
        if (process.env.NODE_ENV !== "production") console.error("Exception middleware: ", error);
        if (process.env.NODE_ENV !== "development") delete error.stack;

        const errorString = (error && error.statusCode) ? error : "Oops internal error";
        response.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json(errorString);
        next();
    }
}
const exceptionsMiddleware = new ExceptionsMiddleware();
export default exceptionsMiddleware.setHttpError;
