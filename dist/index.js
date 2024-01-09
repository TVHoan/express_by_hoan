"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbcon = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const ProductController_1 = __importDefault(require("./products/ProductController"));
const data_source_1 = __importDefault(require("./data-source"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = new app_1.default([new ProductController_1.default()], PORT);
exports.dbcon = data_source_1.default;
exports.dbcon.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
app.listen();
