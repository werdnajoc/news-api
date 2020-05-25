import "module-alias/register";

import express,
{
    Application
} from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes";

import ExceptionsMiddleware from "./middlewares/ExceptionsMiddleware";

class Server {
    app: Application;
    port: number;

    constructor() {
        this.setEnv();
        this.port = Number(process.env.PORT) || 3000;
        this.app = express();
        this.preMiddleware();
        this.routes();
        this.postMiddleware();
        this.start();
    }

    setEnv() {
        dotenv.config();
    }

    preMiddleware() {
        this.app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());

    }

    postMiddleware() {
        this.app.use(ExceptionsMiddleware);
    }

    routes() {
        this.app.use(routes);
    }

    start() {
        this.app.listen(this.port, () => console.log(`Listen port ${this.port}`))
    }
}

new Server();
