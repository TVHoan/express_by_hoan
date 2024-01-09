import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import App from "./app";
import ProductController from "./products/ProductController";
import {DataSource} from "typeorm";
import {Product} from "./products/ProductEntity";
import {dbconect} from "./base/sqlconnection/mysqlconnect";
import dataSource from "./data-source";

dotenv.config();

const PORT = process.env.PORT || 3000;

const  app = new App([new ProductController()],PORT)

export  const dbcon = dataSource
dbcon.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
app.listen();