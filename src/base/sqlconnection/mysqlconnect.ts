import { DataSource } from "typeorm"

export function dbconect(host: string ="localhost", port :number = 3306,username:string = "root",
                         password: string = "1",database:string ="",entities: any,synchronize:boolean= true){
    return  new DataSource({
        type:  "mysql",
        host: host ,
        port: port,
        username: username ,
        password: password,
        database: database,
        entities: entities,
        synchronize: synchronize,
    })
}


