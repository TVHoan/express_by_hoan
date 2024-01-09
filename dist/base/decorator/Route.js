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
        const originalValue = descriptor.value;
        descriptor.value = function (...args) {
            // "this" here will refer to the class instance
            var newthis = originalValue.apply(this, args);
            console.log(this.constructor.name);
        };
    };
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
