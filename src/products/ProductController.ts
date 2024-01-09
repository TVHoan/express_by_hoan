import {BaseController} from "../base/abstractions/BaseController";
import express from "express";
import {dbcon} from "../index";
import {Product} from "./ProductEntity";
import {Repository} from "typeorm";

export default class ProductController extends BaseController {
     public path = "/products";
     private _repo :any ;
     constructor() {
         super();
         this._repo = dbcon.getRepository(Product);
         this.initializeRoutes();
     }

     public initializeRoutes() {
         this.router.get(this.path, this.GetAll);
         this.router.post(this.path, this.Insert);

         // Bạn có thể thêm put, patch, delete sau.
     }
     route(){

     }
     async GetAll(request: express.Request, response: express.Response) {
        var result =  await this._repo.manager.getAll();
         response.json(result);
     };
     Insert = async (request: express.Request, response: express.Response) => {
         response.json(request.body);
     };
}
