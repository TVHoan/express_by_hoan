import {setSeederFactory} from "typeorm-extension";
import {Permission} from "../auth/PermissionEntity";
export const permissions: string[] = [
    "GetProducts"
]
export const permissionsFactory = setSeederFactory(Permission, (faker) => {
    const permission = new Permission();
    permission.name  = "Getproducts";
    return permission;
});