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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("../base/abstractions/BaseController");
const ProductEntity_1 = require("./ProductEntity");
const data_source_1 = __importDefault(require("../data-source"));
const typeorm_1 = require("typeorm");
const AuthMiddleware_1 = require("../auth/AuthMiddleware");
const Auth_1 = require("../auth/Auth");
class ProductController extends BaseController_1.BaseController {
    constructor() {
        super();
        this.path = "/products";
        this.GetAll = (request, response) => __awaiter(this, void 0, void 0, function* () {
            var result = yield this._db.find(ProductEntity_1.Product);
            return response.json(result);
        });
        this.Insert = (request, response) => __awaiter(this, void 0, void 0, function* () {
            return response.json({ user: (0, Auth_1.getUser)(request) });
        });
        this.FindAll = (request, response) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            var param = request.query;
            var wheres = {};
            if (param["name"] != undefined) {
                wheres["name"] = (0, typeorm_1.Like)('%' + param["name"] + '%');
            }
            var result = yield this._db.getRepository(ProductEntity_1.Product).findAndCount({
                where: wheres,
                order: { name: "DESC" },
                take: parseInt(((_a = param["take"]) === null || _a === void 0 ? void 0 : _a.toString()) || "10"),
                skip: parseInt(((_b = param["skip"]) === null || _b === void 0 ? void 0 : _b.toString()) || "0")
            });
            return response.json(result);
        });
        this._db = data_source_1.default.getRepository(ProductEntity_1.Product).manager;
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, [(0, AuthMiddleware_1.authozire)(["GetProducts"])], this.GetAll);
        this.router.post(this.path, [], this.Insert);
        this.router.get(this.path + "/get", [], this.FindAll);
    }
}
exports.default = ProductController;
