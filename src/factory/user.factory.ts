import {setSeederFactory} from "typeorm-extension";
import {Product} from "../products/ProductEntity";
import {Faker} from "@faker-js/faker";
import {User} from "../auth/UserEntity";
import bcrypt from "bcrypt";

export const usersFactory =setSeederFactory(User, (faker: Faker) => {
    const user = new User();
    user.email  = "admin";
    var password =  bcrypt.hash("1", 10);
    password.then((value)=>{
        user.password = value;
    });
    user.name = "admin";
    return user;
});