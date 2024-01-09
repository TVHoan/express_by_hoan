import  {DataSource,DataSourceOptions} from 'typeorm'
import {Product} from "./products/ProductEntity";
import {SeederOptions} from "typeorm-extension";
import MainSeeder from "./factory/main.seeder";
import { productsFactory} from "./factory/product.factory";

export const dataSourceOption:DataSourceOptions  & SeederOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "express",
    entities: [Product],
    migrations: ["dist/migrations/**"],
    migrationsTableName: "custom_migration_table",
    // seed
    seeds : [MainSeeder],
    factories: [productsFactory],
}
const dataSource = new DataSource(dataSourceOption);
export default dataSource;