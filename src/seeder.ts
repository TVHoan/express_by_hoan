import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import {dataSourceOption} from "./data-source";




const dataSource = new DataSource(dataSourceOption);

dataSource.initialize().then(async () => {
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    process.exit();
});