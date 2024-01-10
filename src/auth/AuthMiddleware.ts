import {NextFunction} from "express";
import jwt from "jsonwebtoken";

export async function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.get("Authorization");
    if (token) {
        const secret = process.env.ACCESS_TOKEN_SECRET  || "";

/*        try {
            const verificationResponse =  jwt.verify(token, secret) as jwt.JwtPayload ;
            const id = verificationResponse.jti;
            const user = await userModel.findById(id);
            if (user) {
                request. = user;
                next();
            } else {
                return;
            }
        } catch (error) {

        }*/
    } else {
/*
         response.status(401).send('Không tìm thấy access token!');
*/
    }
}
