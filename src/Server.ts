import express,
{
    Application
} from "express";
import morgan from "morgan";

import routes from "./routes";

class Server {
    app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    config() {
        this.app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
    }

    routes() {
        this.app.use(routes);
    }

    start() {
        this.app.listen(3000, () => console.log("Listen port 3000"))
    }
}

new Server();
