import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import fs from 'fs';
import {createReadStream} from "node:fs";
import express from "express";
import {File} from "../../entitys/FileEntity";
import {getUser} from "../../auth/Auth";

export async function SaveFile(filename: string, data: any, userspermission:number[]  = [],path:string = "/file/image", folderSrc: string = "productimage" ) {
        try {
            filename = Date.now() + filename
            var pathsave = join(__dirname + "../../../../src/contents/" + folderSrc, filename)
            while (fs.existsSync(pathsave)) {
                pathsave = join(__dirname + "../../../../src/contents/" + folderSrc, Date.now() + filename)
            }
            var des = path + "/" + filename; ;
            fs.copyFileSync(data.path, pathsave);
            var file = new File();
            file.ispublic = userspermission.length > 0 ? false : true;
            file.source = pathsave;
            file.destination = des
            file.users = userspermission;
            await File.insert(file);
            return des;
        }
        catch (e) {
            return ""
        }
}
export async function ReadFile(path:string, request: express.Request,response: express.Response){
    var file = await File.findOne({where:{
        destination: path
        }});
/*
    var fullpath = join(__dirname+"../../../../src/contents/"+path, filename);
*/
    var user = getUser(request);
    var userid = user?.Id
    if( file){
        if (!file.ispublic &&  !file.users.some( x=> x= userid)  )
            return response.send({ messenge:"You not permisson access file" });
        if (fs.existsSync(file.source))
          return   createReadStream(file.source).pipe(response);
    }
   return  response.send({ messenge:"File Not Found" });
}
