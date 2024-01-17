import {BaseController} from "../base/abstractions/BaseController";
import express from "express";
import {ReadFile} from "../base/filemanager/files";

export default class FileController extends BaseController {
    public path = "/file";

    constructor() {
        super();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path+"/image/:filename",this.Readfile)
    }

     Readfile = async (request: express.Request, response: express.Response) => {
        var filename = request.params.filename;
         ReadFile("productimage",filename,response);
    }
}