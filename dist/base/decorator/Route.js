"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Post = exports.Get = void 0;
function Get(path) {
    return function (target, propertyKey, descriptor) {
        var a = target;
        var b = propertyKey;
        var c = descriptor;
        descriptor.configurable = true;
        descriptor.enumerable = true;

        target.router.get(path, descriptor.value);
    };
    const originalValue = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // "this" here will refer to the class instance
        console.log(this.constructor.name);

        return originalValue.apply(this, args);
}
exports.Get = Get;
function Post(path) {
    return function (target, propertyKey, descriptor) {
    };
}
exports.Post = Post;
function Put(path) {
    return function (target, propertyKey, descriptor) {
    };
}
exports.Put = Put;
function Delete(path) {
    return function (target, propertyKey, descriptor) {
    };
}
exports.Delete = Delete;
