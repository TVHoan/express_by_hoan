import express, {NextFunction} from "express";
import jwt, {JsonWebTokenError} from "jsonwebtoken";
import {User} from "./UserEntity";

export const authozire  =
     (permissions: Array<string>) => {
         return async (request: express.Request, response: express.Response, next: express.NextFunction) => {
             const token = request.headers.authorization;
             if (token) {
                 var beartoken = token.replace("Bearer ", "")
                 const secret = process.env.ACCESS_TOKEN_SECRET || "";

                 try {
                     const verificationResponse = jwt.verify(beartoken, secret) as jwt.JwtPayload;
                     const Id = verificationResponse.id;

                     const user = await User.findOneBy({id: Id});
                     if (user) {
                         if (permissions.length > 0) {
                             const user = await User.findOne({
                                 where: {id: Id}, relations: {
                                     permissions: true
                                 }
                             });
                             if (user) {
                                 permissions.forEach(async (value) => {
                                     if (user.permissions.filter(x => x.name == value))
                                         next();

                                 })
                             } else {
                                  response
                                     .status(401)
                                     .json({success: false, message: "You not have Permission "});
                             }
                         }
                         next();

                     } else {
                          response
                             .status(401)
                             .json({success: false, message: "UnAuthorization "});
                     }
                 } catch (error) {
                      response
                         .status(401)
                         .json({success: false, error});
                 }
             } else {

                  response
                     .status(403)
                     .json({success: false, message: "Authorization token not found"});

             }

         }
     }