import * as express from "express";
export abstract class BaseController {
    public router: express.Router;

    static getInstance() {
        return this;
    }
    constructor() {
        this.router = express.Router();
    }
    public abstract initializeRoutes(): void;
}