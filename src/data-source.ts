import {DatabaseType, DataSource, DataSourceOptions} from 'typeorm'
import {Product} from "./entitys/ProductEntity";
import {SeederOptions} from "typeorm-extension";
import MainSeeder from "./factory/main.seeder";
import { productsFactory} from "./factory/product.factory";
import dotenv from "dotenv";
import {User} from "./auth/UserEntity";
import {Permission} from "./auth/PermissionEntity";
import {usersFactory} from "./factory/user.factory";
import {permissionsFactory} from "./factory/permission.factory";
import {Order} from "./entitys/OrderEntity";
import {Orderline} from "./entitys/OrderlineEntity";
import {Category} from "./entitys/CategoryEntity";

dotenv.config();

export const dataSourceOption:DataSourceOptions  & SeederOptions = {
    type:   "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User,Permission,Product,Category,Order,Orderline],
    migrations: ["dist/migrations/**"],
    migrationsTableName: "custom_migration_table",
    // seed
    seeds : [MainSeeder],
    factories: [usersFactory,permissionsFactory,productsFactory],
}
const dataSource = new DataSource(dataSourceOption);
export default dataSource;