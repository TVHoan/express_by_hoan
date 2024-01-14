import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Product } from "../products/ProductEntity";
import {User} from "../auth/UserEntity";
import {Permission} from "../auth/PermissionEntity";
import {permissions} from "./permission.factory";
import bcrypt from "bcrypt";

export default class MainSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        var successPermisisons :Permission[] = []

        permissions.forEach(
          async (value)=>{
                var existper = await dataSource.getRepository(Permission).existsBy({name:value });
                if (!existper){
                    var permission = new Permission();
                    permission.name = value;
                   var success = await  dataSource.getRepository(Permission).save(permission)
                    successPermisisons.push(success);
                }
            }
        );
        //
        var permission = new Permission();
        permission.name = permissions[0];
        var success = await  dataSource.getRepository(Permission).insert(permission)
/*
        successPermisisons.push(success);
*/
        var existAdmin = await dataSource.getRepository(User).findOneBy({email:"admin"});
        if ( !existAdmin){
            const user = new User();
            user.email  = "admin";
            var password = await bcrypt.hashSync("1", 10);
            user.password = password;
            user.name = "admin";
            var successUser =  await dataSource.getRepository(User).save(user)
            if (successPermisisons.length>0) {
                successUser.permissions = successPermisisons;
                successUser.save();
            }
        }
        else {
            if (successPermisisons.length>0){
                existAdmin.permissions = successPermisisons;
                await dataSource.getRepository(User).save(existAdmin)
            }
            existAdmin.permissions = successPermisisons;

            var test = await dataSource.getRepository(Permission).findOneBy({name:"Getproducts" });
            if (test) existAdmin.permissions.push(test) ;

            await dataSource.getRepository(User).save(existAdmin)
        }



        const productFactory = factoryManager.get(Product);
        const products = await productFactory.saveMany(7);
    }
}