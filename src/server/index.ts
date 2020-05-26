import "module-alias/register";
import express,
{
    Application
} from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

import registerRouter from "./routes";

import ExceptionsMiddleware from "./middlewares/ExceptionsMiddleware";

class Index {
    app: Application;
    port: number;

    constructor() {
        this.setEnv();
        this.port = Number(process.env.PORT) || 3000;
        this.app = express();
        this.preMiddleware();
        this.registerRouter();
        this.setSwaggerRoute();
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

    registerRouter() {
        registerRouter(this.app);
    }

    setSwaggerRoute() {
        const swaggerDocument = YAML.load('./documentation/swagger/swagger.yaml');
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    start() {
        this.app.listen(this.port, () => console.log(`Listen port ${this.port}`))
    }
}

new Index();
