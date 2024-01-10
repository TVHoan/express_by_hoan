import {DatabaseType, DataSource, DataSourceOptions} from 'typeorm'
import {Product} from "./products/ProductEntity";
import {SeederOptions} from "typeorm-extension";
import MainSeeder from "./factory/main.seeder";
import { productsFactory} from "./factory/product.factory";
import dotenv from "dotenv";
import {User} from "./auth/UserEntity";
import {Permission} from "./auth/PermissionEntity";

dotenv.config();

export const dataSourceOption:DataSourceOptions  & SeederOptions = {
    type:   "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User,Permission,Product],
    migrations: ["dist/migrations/**"],
    migrationsTableName: "custom_migration_table",
    // seed
    seeds : [MainSeeder],
    factories: [productsFactory],
}
const dataSource = new DataSource(dataSourceOption);
export default dataSource;