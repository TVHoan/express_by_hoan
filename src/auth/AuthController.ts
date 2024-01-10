import {BaseController} from "../base/abstractions/BaseController";
import {EntityManager} from "typeorm";
import dataSource from "../data-source";
import {Product} from "../products/ProductEntity";
import express from "express";
import {User} from "./UserEntity";
import bcrypt from 'bcrypt';
import AuthToken from "./AuthToken";
export default class AuthController extends BaseController {
    public path = "/auth";
    private _db_user: EntityManager;

    constructor() {
        super();
        this._db_user = dataSource.getRepository(User).manager;
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.Login);
        this.router.post(this.path, this.Register);


        // Bạn có thể thêm put, patch, delete sau.
    }
     Login = async (request: express.Request, response: express.Response)=>{
         const email = request.body.email || 'admin';
         const password = request.body.password || '1';

         const user = await User.findOne({where: {email:email }});
         if (!user) {
             return response.status(401).send('Tên đăng nhập không tồn tại.');
         }

         const isPasswordValid = bcrypt.compareSync(password, user.password);
         if (!isPasswordValid) {
             return response.status(401).send('Mật khẩu không chính xác.');
         }

         const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
         const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

         const dataForAccessToken = {
             username: user.email,
         };
         const  auth = new  AuthToken();
         const accessToken = await auth.generate(
             dataForAccessToken,
             accessTokenSecret,
             accessTokenLife,
         );
         if (!accessToken) {
             return response
                 .status(401)
                 .send('Đăng nhập không thành công, vui lòng thử lại.');
         }

         return response.json({
             msg: 'Đăng nhập thành công.',
             accessToken,
             user,
         });
        }
    Register = async (request: express.Request, response: express.Response)=>{
        const email = request.body.email;
        const name = request.body.name;
        const password = request.body.password;
        const saltRounds = 10;

        var user =  await this._db_user.getRepository(User).findOne({where :{email: email}});
        if (user) return  response.status(409).send('Tên tài khoản đã tồn tại.');
        else {
            const HashPassword = await bcrypt.hashSync(password, saltRounds);
            const newUser = new User ();
            newUser.email = email;
            newUser.name = name;
            newUser.password = HashPassword;
            const createUser = await this._db_user.insert(User,newUser);
            if (!createUser) {
                return response
                    .status(400)
                    .send('Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại.');
            }
            return response.send({
                email,
            });
        }
    }

}