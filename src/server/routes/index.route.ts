import {Router} from "express";
import VisitIndexController from "@contexts/index/application/VisitIndexController";

export const register = (router: Router) => {
    router.get('/', VisitIndexController);
}
