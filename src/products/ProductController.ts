import {BaseController, Middleware} from "../base/abstractions/BaseController";
import express from "express";
import {Product} from "./ProductEntity";
import dataSource from "../data-source";
import {EntityManager, Like} from "typeorm";
import {authPlugins} from "mysql2";
import {authozire} from "../auth/AuthMiddleware";
import {getUser} from "../auth/Auth";

export default class ProductController extends BaseController {
     public path = "/products";
     private _db :EntityManager;
     constructor() {
         super();
         this._db = dataSource.getRepository(Product).manager;
         this.initializeRoutes();

     }
     public initializeRoutes() {
         this.router.get(this.path,[authozire(["GetProducts"])], this.GetAll);
         this.router.post(this.path,[], this.Insert);
         this.router.get(this.path+"/get",[], this.FindAll);
     }
    GetAll = async (request: express.Request, response: express.Response) => {
        var result =  await this._db.find(Product);
        return response.json(result);
     };
     Insert = async (request: express.Request, response: express.Response) => {

         return response.json({user:getUser(request)});
     };
     FindAll = async (request: express.Request, response: express.Response) =>{
         var param = request.query;
         var wheres : Record<string,any>  ={};
         if(param["name"]!= undefined){
             wheres["name"]= Like('%' + param["name"] + '%');
         }
         var result =  await this._db.getRepository(Product).findAndCount({
             where: wheres,
             order: { name: "DESC" },
             take: parseInt( param["take"]?.toString() ||"10") ,
             skip: parseInt(param["skip"]?.toString() || "0" )
         });
         return response.json(result);
     }

}
