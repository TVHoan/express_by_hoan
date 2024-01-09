import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import App from "./app";
import ProductController from "./products/ProductController";
import {DataSource} from "typeorm";
import {Product} from "./products/ProductEntity";
import {dbconect} from "./base/sqlconnection/mysqlconnect";

dotenv.config();

const PORT = process.env.PORT || 3000;

const  app = new App([new ProductController()],PORT)

export  const dbcon = dbconect("localhost",3306,"root","1","express",
    [Product]);
app.listen();