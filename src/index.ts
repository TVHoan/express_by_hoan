import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import App from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

const  app = new App([],PORT)

app.listen();