import {BaseController} from "../base/abstractions/BaseController";
import express from "express";
import {Get} from "../base/decorator/Route";
export default class ProductController extends BaseController {
     public path = "/heroes";

     constructor() {
         super();
         this.initializeRoutes();
     }

     public initializeRoutes() {
         this.router.get(this.path, this.getAllHero);
         this.router.post(this.path, this.addHero);
         // Bạn có thể thêm put, patch, delete sau.
     }
     route(){

     }
     @Get("/heros")
     async getAllHero(request: express.Request, response: express.Response) {
         var a = {a:2};
         response.json(a);
     };
     addHero = async (request: express.Request, response: express.Response) => {
         response.json(request.body);
     };
}
