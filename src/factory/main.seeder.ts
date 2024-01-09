import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Product } from "../products/ProductEntity";

export default class MainSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const productFactory = factoryManager.get(Product);

        const products = await productFactory.saveMany(7);
    }
}