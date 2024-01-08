
export function Get(path: string){
return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    var a = target;
    var b = propertyKey;
    var c = descriptor;
    descriptor.configurable = true;
    descriptor.enumerable = true;
    target.router.get(path,descriptor.value)
    };
}
export function Post(path: string){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    };
}
export function Put(path: string){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    };
}
export function Delete(path: string){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    };
}
