import * as express from "express";


export function Get(path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var a = target;
        var b = propertyKey;
        var c = descriptor;
        descriptor.configurable = true;
        descriptor.enumerable = true;
        const originalValue = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // "this" here will refer to the class instance
            var newthis = originalValue.apply(this, args);
            console.log(this.constructor.name);

        };
    }
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
