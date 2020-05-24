import
{
    Request,
    Response,
} from "express";

class IndexController {
    show(request: Request, response: Response) {
        response.send('Hello World');
    }
}

export default new IndexController();
