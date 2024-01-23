import * as express from "express";
import {ReservedOrUserListener} from "socket.io/dist/typed-events";
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
export class Middleware{
    path:string;
    middleware:any;
}
