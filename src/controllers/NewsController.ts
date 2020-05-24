import
{
    Request,
    Response,
} from "express";

import NewsApi from "../repositories/newsapi";

class NewsController {
    show(request: Request, response: Response) {
        response.send('Hello to news');
    }

    async findByValue(request: Request, response: Response) {
        const result = await NewsApi
            .getByValueAndLanguage(request.params.value, "es");
        response.json(result);
    }
}

export default new NewsController();
