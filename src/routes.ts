import { Router } from "express";

import IndexController from "@controllers/IndexController";
import NewsController from "@controllers/NewsController";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getAllRoutes();
    }

    getAllRoutes() {
        this.index();
        this.news();
    }

    index() {
        this.router.get('/', IndexController.show)
    }

    news() {
        this.router.get('/news', NewsController.show);
        this.router.get('/news/:value', NewsController.findByValue);
    }
}

export default new Routes().router;
