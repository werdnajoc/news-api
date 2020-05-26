import
{
  Request,
  Response,
} from "express";

import {VisitIndex} from "@contexts/index/domain/VisitIndex";
import {IndexSay} from "@contexts/index/domain/IndexSay";

class VisitIndexController {

  run(request: Request, response: Response) {
    const visitIndex = new VisitIndex(
      new IndexSay("Hello world")
    );
    response.send(visitIndex.toPrimitives());
  }
}

export default new VisitIndexController().run;
