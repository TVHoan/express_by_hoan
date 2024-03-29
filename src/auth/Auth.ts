import express  from "express";
import jwt from "jsonwebtoken";

export   function getUser  (request: express.Request)  {
    const token = request.headers.authorization;
    if (token) {
        var beartoken = token.replace("Bearer ", "")
        const secret = process.env.ACCESS_TOKEN_SECRET || "";
        if (secret=="" ||secret ==undefined){
            return  {
                messenge: "ACCESS_TOKEN_SECRET not found"
            }
        }
        try {
            const verificationResponse = jwt.verify(beartoken, secret) as jwt.JwtPayload;
            const Id = verificationResponse.id;
            const Name = verificationResponse.name;
            const Email = verificationResponse.email;
            const permissions: string[] = verificationResponse.permissions;
            return {
                Id : Id,
                Name: Name,
                Email:Email,
                Permissions: permissions
            }
        }
        catch (e) {
            return {
                e
            }
        }
        }
}
    class User{
        Id: string
        Name:string
        Email:string
        Permissions: string[]
        messenge:string
    }