import {Application, Router} from "express";
import glob from "glob";
import path from "path";

export default (app: Application) => {
    const router = Router();
    const routes = glob.sync(`${__dirname}/**/*.route.*`);
    routes.forEach((routePath) => {
        const route = require(path.resolve(routePath));
        route.register(router);
        app.use(router);
    });
};
