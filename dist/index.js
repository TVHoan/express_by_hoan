"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const ProductController_1 = __importDefault(require("./products/ProductController"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = new app_1.default([new ProductController_1.default()], PORT);
app.listen();
