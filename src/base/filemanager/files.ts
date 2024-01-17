import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import fs from 'fs';
import {createReadStream} from "node:fs";
import express from "express";

export async function SaveFile(filename: string, data: any,path:string = "file/image", folderSrc: string = "productimage" ) {
        filename = Date.now() + filename
        var pathsave = join(__dirname+"../../../../src/contents/"+folderSrc, filename)
        while (fs.existsSync(pathsave)){
            pathsave = join(__dirname+"../../../../src/contents/"+folderSrc, Date.now() + filename)
        }
       fs.copyFileSync( data.path, pathsave );
        return path+"/"+filename;
}
export function ReadFile(path:string,filename: string,  response: express.Response){
    var fullpath = join(__dirname+"../../../../src/contents/"+path, filename);
    if(fs.existsSync(fullpath))
         createReadStream(fullpath).pipe(response);
    else   response.send({messenge:"File Not Found"});
}
