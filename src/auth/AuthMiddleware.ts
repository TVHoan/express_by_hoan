import express, {NextFunction} from "express";
import jwt, {JsonWebTokenError} from "jsonwebtoken";
import {User} from "./UserEntity";

export const authozire  =
     (permissionsAcept: Array<string>) => {
         return async (request: express.Request, response: express.Response, next: express.NextFunction) => {
             const token = request.headers.authorization;
             if (token) {
                 var beartoken = token.replace("Bearer ", "")
                 const secret = process.env.ACCESS_TOKEN_SECRET || "";

                 try {
                     const verificationResponse = jwt.verify(beartoken, secret) as jwt.JwtPayload;
                     const Id = verificationResponse.id;
                     const Name = verificationResponse.name;
                     const Email = verificationResponse.email;
                     const permissions :string[] = verificationResponse.permissions;
                         if (permissionsAcept.length > 0) {
                             permissionsAcept.forEach(async (value) => {
                                     if (permissions.filter(x => x == value).length == 0)
                                      return response
                                         .status(401)
                                         .json({success: false, message: "You not have Permission "});

                                 })
                             }
                         next();

                 } catch (error) {
                     return  response
                         .status(401)
                         .json({success: false, error});
                 }
             } else {

                 return  response
                     .status(403)
                     .json({success: false, message: "Authorization token not found"});

             }

         }
     }