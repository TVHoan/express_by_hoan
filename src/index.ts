import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import App from "./app";
import ProductController from "./products/ProductController";

dotenv.config();

const PORT = process.env.PORT || 3000;

const  app = new App([new ProductController()],PORT)

app.listen();