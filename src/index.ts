import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import App from "./app";
import ProductController from "./controllers/ProductController";
import {DataSource} from "typeorm";
import {Product} from "./entitys/ProductEntity";
import {dbconect} from "./base/sqlconnection/mysqlconnect";
import dataSource from "./data-source";
import AuthController from "./auth/AuthController";
import FileController from "./controllers/FileController";
import * as socketio from "socket.io";
import ChatController from "./controllers/ChatController";

dotenv.config();

const PORT = process.env.PORT || 3000;

const  app = new App(
    [new AuthController(),
    new FileController(),
    new ProductController()
    ],
    [new ChatController()]
    ,PORT)

export  const dbcon = dataSource
dbcon.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
app.listen();