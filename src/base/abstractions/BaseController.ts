import * as express from "express";
export abstract class BaseController {
    public router: express.Router;
    public middleware: Middleware[];
    static getInstance() {
        return this;
    }
    constructor() {
        this.router = express.Router();
        this.middleware = [new Middleware()];
    }
    public abstract initializeRoutes(): void;
}
export class Middleware{
    path:string;
    middleware:any;
}
