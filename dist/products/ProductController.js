"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("../base/abstractions/BaseController");
class ProductController extends BaseController_1.BaseController {
    constructor() {
        super();
        this.path = "/products";
        this.Insert = (request, response) => __awaiter(this, void 0, void 0, function* () {
            response.json(request.body);
        });
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.GetAll);
        this.router.post(this.path, this.Insert);
        // Bạn có thể thêm put, patch, delete sau.
    }
    route() {
    }
    GetAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json();
        });
    }
    ;
}
exports.default = ProductController;
